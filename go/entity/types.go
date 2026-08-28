// Typed models for the WorldCupQualification SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/world-cup-qualification-sdk/go/core"
)

// Competition is the typed data model for the competition entity.
type Competition struct {
	Area *map[string]any `json:"area,omitempty"`
	Code *string `json:"code,omitempty"`
	CurrentSeason *map[string]any `json:"currentSeason,omitempty"`
	Emblem *string `json:"emblem,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUpdated *string `json:"lastUpdated,omitempty"`
	Name *string `json:"name,omitempty"`
	NumberOfAvailableSeasons *int `json:"numberOfAvailableSeasons,omitempty"`
	Plan *string `json:"plan,omitempty"`
	Type *string `json:"type,omitempty"`
}

// CompetitionLoadMatch is the typed request payload for Competition.LoadTyped.
type CompetitionLoadMatch struct {
	Id int `json:"id"`
}

// CompetitionListMatch is the typed request payload for Competition.ListTyped.
type CompetitionListMatch struct {
	Area *string `json:"area,omitempty"`
	Plan *string `json:"plan,omitempty"`
}

// Match is the typed data model for the match entity.
type Match struct {
	AwayTeam *map[string]any `json:"awayTeam,omitempty"`
	Group *string `json:"group,omitempty"`
	HomeTeam *map[string]any `json:"homeTeam,omitempty"`
	Id *int `json:"id,omitempty"`
	Matchday *int `json:"matchday,omitempty"`
	Referees *[]any `json:"referees,omitempty"`
	Score *map[string]any `json:"score,omitempty"`
	Stage *string `json:"stage,omitempty"`
	Status *string `json:"status,omitempty"`
	UtcDate *string `json:"utcDate,omitempty"`
}

// MatchListMatch is the typed request payload for Match.ListTyped.
type MatchListMatch struct {
	CompetitionId int `json:"competition_id"`
	DateFrom *string `json:"date_from,omitempty"`
	DateTo *string `json:"date_to,omitempty"`
	Matchday *int `json:"matchday,omitempty"`
	Season *int `json:"season,omitempty"`
	Status *string `json:"status,omitempty"`
}

// Standing is the typed data model for the standing entity.
type Standing struct {
	Group *string `json:"group,omitempty"`
	Stage *string `json:"stage,omitempty"`
	Table *[]any `json:"table,omitempty"`
	Type *string `json:"type,omitempty"`
}

// StandingListMatch is the typed request payload for Standing.ListTyped.
type StandingListMatch struct {
	CompetitionId int `json:"competition_id"`
	Matchday *int `json:"matchday,omitempty"`
	Season *int `json:"season,omitempty"`
}

// Team is the typed data model for the team entity.
type Team struct {
	Address *string `json:"address,omitempty"`
	ClubColors *string `json:"clubColors,omitempty"`
	Crest *string `json:"crest,omitempty"`
	Founded *int `json:"founded,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUpdated *string `json:"lastUpdated,omitempty"`
	Name *string `json:"name,omitempty"`
	ShortName *string `json:"shortName,omitempty"`
	Tla *string `json:"tla,omitempty"`
	Venue *string `json:"venue,omitempty"`
	Website *string `json:"website,omitempty"`
}

// TeamListMatch is the typed request payload for Team.ListTyped.
type TeamListMatch struct {
	CompetitionId int `json:"competition_id"`
	Season *int `json:"season,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
