package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCompetitionEntityFunc func(client *WorldCupQualificationSDK, entopts map[string]any) WorldCupQualificationEntity

var NewMatchEntityFunc func(client *WorldCupQualificationSDK, entopts map[string]any) WorldCupQualificationEntity

var NewStandingEntityFunc func(client *WorldCupQualificationSDK, entopts map[string]any) WorldCupQualificationEntity

var NewTeamEntityFunc func(client *WorldCupQualificationSDK, entopts map[string]any) WorldCupQualificationEntity

