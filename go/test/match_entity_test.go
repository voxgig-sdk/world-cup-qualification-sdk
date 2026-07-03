package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/world-cup-qualification-sdk/go"
	"github.com/voxgig-sdk/world-cup-qualification-sdk/go/core"

	vs "github.com/voxgig-sdk/world-cup-qualification-sdk/go/utility/struct"
)

func TestMatchEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Match(nil)
		if ent == nil {
			t.Fatal("expected non-nil MatchEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := matchBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "match." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set WORLDCUPQUALIFICATION_TEST_MATCH_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		matchRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.match", setup.data)))
		var matchRef01Data map[string]any
		if len(matchRef01DataRaw) > 0 {
			matchRef01Data = core.ToMapAny(matchRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = matchRef01Data

		// LIST
		matchRef01Ent := client.Match(nil)
		matchRef01Match := map[string]any{
			"competition_id": setup.idmap["competition01"],
		}

		matchRef01ListResult, err := matchRef01Ent.List(matchRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, matchRef01ListOk := matchRef01ListResult.([]any)
		if !matchRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", matchRef01ListResult)
		}

	})
}

func matchBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "match", "MatchTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read match test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse match test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"match01", "match02", "match03", "competition01", "competition02", "competition03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("WORLDCUPQUALIFICATION_TEST_MATCH_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"WORLDCUPQUALIFICATION_TEST_MATCH_ENTID": idmap,
		"WORLDCUPQUALIFICATION_TEST_LIVE":      "FALSE",
		"WORLDCUPQUALIFICATION_TEST_EXPLAIN":   "FALSE",
		"WORLDCUPQUALIFICATION_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["WORLDCUPQUALIFICATION_TEST_MATCH_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["WORLDCUPQUALIFICATION_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["WORLDCUPQUALIFICATION_APIKEY"],
			},
			extra,
		})
		client = sdk.NewWorldCupQualificationSDK(core.ToMapAny(mergedOpts))
	}

	live := env["WORLDCUPQUALIFICATION_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["WORLDCUPQUALIFICATION_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
