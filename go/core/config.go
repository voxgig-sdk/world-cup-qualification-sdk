package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "WorldCupQualification",
			"slug": "world-cup-qualification",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.football-data.org/v4",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-Auth-Token",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"competition": map[string]any{},
				"match": map[string]any{},
				"standing": map[string]any{},
				"team": map[string]any{},
			},
		},
		"entity": map[string]any{
			"competition": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "area",
						"title": "Area",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
						"short": "Short code for the competition",
					},
					map[string]any{
						"name": "currentSeason",
						"title": "Current Season",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "emblem",
						"title": "Emblem",
						"type": "`$STRING`",
						"short": "URL to competition emblem/logo",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "Unique identifier for the competition",
					},
					map[string]any{
						"name": "lastUpdated",
						"title": "Last Updated",
						"type": "`$STRING`",
						"short": "Last update timestamp",
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the competition",
					},
					map[string]any{
						"name": "numberOfAvailableSeasons",
						"title": "Number Of Available Seasons",
						"type": "`$INTEGER`",
						"short": "Number of seasons available in the API",
					},
					map[string]any{
						"name": "plan",
						"title": "Plan",
						"type": "`$STRING`",
						"short": "API access tier required",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Type of competition",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "competition",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/competitions",
								"segments": []any{
									map[string]any{
										"lit": "competitions",
									},
								},
								"parts": []any{
									"competitions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "area",
											"orig": "area",
											"type": "`$STRING`",
											"kind": "query",
											"example": "AFR,UEFA",
										},
										map[string]any{
											"name": "plan",
											"orig": "plan",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"area",
										"plan",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/competitions/{id}",
								"segments": []any{
									map[string]any{
										"lit": "competitions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"competitions",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 2006,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"match": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "awayTeam",
						"title": "Away Team",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "group",
						"title": "Group",
						"type": "`$STRING`",
						"short": "Group identifier for group stage matches",
					},
					map[string]any{
						"name": "homeTeam",
						"title": "Home Team",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "Unique match identifier",
					},
					map[string]any{
						"name": "matchday",
						"title": "Matchday",
						"type": "`$INTEGER`",
						"short": "Matchday number",
					},
					map[string]any{
						"name": "referees",
						"title": "Referees",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "score",
						"title": "Score",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "stage",
						"title": "Stage",
						"type": "`$STRING`",
						"short": "Competition stage (e.g., GROUP_STAGE, KNOCKOUT)",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "Current match status",
					},
					map[string]any{
						"name": "utcDate",
						"title": "Utc Date",
						"type": "`$STRING`",
						"short": "Match date and time in UTC",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "match",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/competitions/{id}/matches",
								"segments": []any{
									map[string]any{
										"lit": "competitions",
									},
									map[string]any{
										"var": "competition_id",
									},
									map[string]any{
										"lit": "matches",
									},
								},
								"parts": []any{
									"competitions",
									"{competition_id}",
									"matches",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "competition_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "competition_id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 2006,
										},
									},
									"query": []any{
										map[string]any{
											"name": "date_from",
											"orig": "date_from",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2024-01-01",
										},
										map[string]any{
											"name": "date_to",
											"orig": "date_to",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2024-12-31",
										},
										map[string]any{
											"name": "matchday",
											"orig": "matchday",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "season",
											"orig": "season",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 2024,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"competition_id",
										"date_from",
										"date_to",
										"matchday",
										"season",
										"status",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.competition",
						},
					},
				},
			},
			"standing": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "group",
						"title": "Group",
						"type": "`$STRING`",
						"short": "Group identifier",
					},
					map[string]any{
						"name": "stage",
						"title": "Stage",
						"type": "`$STRING`",
						"short": "Competition stage",
					},
					map[string]any{
						"name": "table",
						"title": "Table",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Type of standing",
					},
				},
				"name": "standing",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/competitions/{id}/standings",
								"segments": []any{
									map[string]any{
										"lit": "competitions",
									},
									map[string]any{
										"var": "competition_id",
									},
									map[string]any{
										"lit": "standings",
									},
								},
								"parts": []any{
									"competitions",
									"{competition_id}",
									"standings",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "competition_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "competition_id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 2006,
										},
									},
									"query": []any{
										map[string]any{
											"name": "matchday",
											"orig": "matchday",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "season",
											"orig": "season",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 2024,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"competition_id",
										"matchday",
										"season",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.competition",
						},
					},
				},
			},
			"team": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"title": "Address",
						"type": "`$STRING`",
						"short": "Team address",
					},
					map[string]any{
						"name": "clubColors",
						"title": "Club Colors",
						"type": "`$STRING`",
						"short": "Team colors",
					},
					map[string]any{
						"name": "crest",
						"title": "Crest",
						"type": "`$STRING`",
						"short": "URL to team crest/logo",
					},
					map[string]any{
						"name": "founded",
						"title": "Founded",
						"type": "`$INTEGER`",
						"short": "Year the team was founded",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "Unique identifier for the team",
					},
					map[string]any{
						"name": "lastUpdated",
						"title": "Last Updated",
						"type": "`$STRING`",
						"short": "Last update timestamp",
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Full name of the team",
					},
					map[string]any{
						"name": "shortName",
						"title": "Short Name",
						"type": "`$STRING`",
						"short": "Short name of the team",
					},
					map[string]any{
						"name": "tla",
						"title": "Tla",
						"type": "`$STRING`",
						"short": "Three-letter abbreviation",
					},
					map[string]any{
						"name": "venue",
						"title": "Venue",
						"type": "`$STRING`",
						"short": "Home venue/stadium",
					},
					map[string]any{
						"name": "website",
						"title": "Website",
						"type": "`$STRING`",
						"short": "Team website URL",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "team",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/competitions/{id}/teams",
								"segments": []any{
									map[string]any{
										"lit": "competitions",
									},
									map[string]any{
										"var": "competition_id",
									},
									map[string]any{
										"lit": "teams",
									},
								},
								"parts": []any{
									"competitions",
									"{competition_id}",
									"teams",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "competition_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "competition_id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 2006,
										},
									},
									"query": []any{
										map[string]any{
											"name": "season",
											"orig": "season",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 2024,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"competition_id",
										"season",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.competition",
						},
					},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
