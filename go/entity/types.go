// Typed models for the WorldCupQualification SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Competition is the typed data model for the competition entity.
type Competition struct {
	Area *map[string]any `json:"area,omitempty"`
	Code *string `json:"code,omitempty"`
	CurrentSeason *map[string]any `json:"current_season,omitempty"`
	Emblem *string `json:"emblem,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUpdated *string `json:"last_updated,omitempty"`
	Name *string `json:"name,omitempty"`
	NumberOfAvailableSeason *int `json:"number_of_available_season,omitempty"`
	Plan *string `json:"plan,omitempty"`
	Type *string `json:"type,omitempty"`
}

// CompetitionLoadMatch is the typed request payload for Competition.LoadTyped.
type CompetitionLoadMatch struct {
	Id int `json:"id"`
}

// CompetitionListMatch mirrors the competition fields as an all-optional match
// filter (Go analog of Partial<Competition>).
type CompetitionListMatch struct {
	Area *map[string]any `json:"area,omitempty"`
	Code *string `json:"code,omitempty"`
	CurrentSeason *map[string]any `json:"current_season,omitempty"`
	Emblem *string `json:"emblem,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUpdated *string `json:"last_updated,omitempty"`
	Name *string `json:"name,omitempty"`
	NumberOfAvailableSeason *int `json:"number_of_available_season,omitempty"`
	Plan *string `json:"plan,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Match is the typed data model for the match entity.
type Match struct {
	AwayTeam *map[string]any `json:"away_team,omitempty"`
	Group *string `json:"group,omitempty"`
	HomeTeam *map[string]any `json:"home_team,omitempty"`
	Id *int `json:"id,omitempty"`
	Matchday *int `json:"matchday,omitempty"`
	Referee *[]any `json:"referee,omitempty"`
	Score *map[string]any `json:"score,omitempty"`
	Stage *string `json:"stage,omitempty"`
	Status *string `json:"status,omitempty"`
	UtcDate *string `json:"utc_date,omitempty"`
}

// MatchListMatch is the typed request payload for Match.ListTyped.
type MatchListMatch struct {
	CompetitionId int `json:"competition_id"`
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
}

// Team is the typed data model for the team entity.
type Team struct {
	Address *string `json:"address,omitempty"`
	ClubColor *string `json:"club_color,omitempty"`
	Crest *string `json:"crest,omitempty"`
	Founded *int `json:"founded,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUpdated *string `json:"last_updated,omitempty"`
	Name *string `json:"name,omitempty"`
	ShortName *string `json:"short_name,omitempty"`
	Tla *string `json:"tla,omitempty"`
	Venue *string `json:"venue,omitempty"`
	Website *string `json:"website,omitempty"`
}

// TeamListMatch is the typed request payload for Team.ListTyped.
type TeamListMatch struct {
	CompetitionId int `json:"competition_id"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
