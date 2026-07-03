package voxgigworldcupqualificationsdk

import (
	"github.com/voxgig-sdk/world-cup-qualification-sdk/go/core"
	"github.com/voxgig-sdk/world-cup-qualification-sdk/go/entity"
	"github.com/voxgig-sdk/world-cup-qualification-sdk/go/feature"
	_ "github.com/voxgig-sdk/world-cup-qualification-sdk/go/utility"
)

// Type aliases preserve external API.
type WorldCupQualificationSDK = core.WorldCupQualificationSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type WorldCupQualificationEntity = core.WorldCupQualificationEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type WorldCupQualificationError = core.WorldCupQualificationError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCompetitionEntityFunc = func(client *core.WorldCupQualificationSDK, entopts map[string]any) core.WorldCupQualificationEntity {
		return entity.NewCompetitionEntity(client, entopts)
	}
	core.NewMatchEntityFunc = func(client *core.WorldCupQualificationSDK, entopts map[string]any) core.WorldCupQualificationEntity {
		return entity.NewMatchEntity(client, entopts)
	}
	core.NewStandingEntityFunc = func(client *core.WorldCupQualificationSDK, entopts map[string]any) core.WorldCupQualificationEntity {
		return entity.NewStandingEntity(client, entopts)
	}
	core.NewTeamEntityFunc = func(client *core.WorldCupQualificationSDK, entopts map[string]any) core.WorldCupQualificationEntity {
		return entity.NewTeamEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewWorldCupQualificationSDK = core.NewWorldCupQualificationSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewWorldCupQualificationSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *WorldCupQualificationSDK  { return NewWorldCupQualificationSDK(nil) }
func Test() *WorldCupQualificationSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
