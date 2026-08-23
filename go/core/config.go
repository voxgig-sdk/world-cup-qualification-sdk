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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.football-data.org/v4",
			"auth": map[string]any{
				"prefix": "",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "code",
						"short": "Short code for the competition",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currentSeason",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "emblem",
						"short": "URL to competition emblem/logo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the competition",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "lastUpdated",
						"short": "Last update timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the competition",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "numberOfAvailableSeasons",
						"short": "Number of seasons available in the API",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "plan",
						"short": "API access tier required",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of competition",
						"type": "`$STRING`",
					},
				},
				"name": "competition",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "AFR,UEFA",
											"kind": "query",
											"name": "area",
											"orig": "area",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "plan",
											"orig": "plan",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/competitions",
								"parts": []any{
									"competitions",
								},
								"select": map[string]any{
									"exist": []any{
										"area",
										"plan",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 2006,
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/competitions/{id}",
								"parts": []any{
									"competitions",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "group",
						"short": "Group identifier for group stage matches",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "homeTeam",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique match identifier",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "matchday",
						"short": "Matchday number",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "referees",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "score",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "stage",
						"short": "Competition stage (e.g., GROUP_STAGE, KNOCKOUT)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Current match status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utcDate",
						"short": "Match date and time in UTC",
						"type": "`$STRING`",
					},
				},
				"name": "match",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 2006,
											"kind": "param",
											"name": "competition_id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "2024-01-01",
											"kind": "query",
											"name": "date_from",
											"orig": "date_from",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2024-12-31",
											"kind": "query",
											"name": "date_to",
											"orig": "date_to",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "matchday",
											"orig": "matchday",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 2024,
											"kind": "query",
											"name": "season",
											"orig": "season",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/competitions/{id}/matches",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"competition",
						},
					},
				},
			},
			"standing": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "group",
						"short": "Group identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stage",
						"short": "Competition stage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "table",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of standing",
						"type": "`$STRING`",
					},
				},
				"name": "standing",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 2006,
											"kind": "param",
											"name": "competition_id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "matchday",
											"orig": "matchday",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 2024,
											"kind": "query",
											"name": "season",
											"orig": "season",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/competitions/{id}/standings",
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
								"select": map[string]any{
									"exist": []any{
										"competition_id",
										"matchday",
										"season",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"competition",
						},
					},
				},
			},
			"team": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"short": "Team address",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "clubColors",
						"short": "Team colors",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "crest",
						"short": "URL to team crest/logo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "founded",
						"short": "Year the team was founded",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the team",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "lastUpdated",
						"short": "Last update timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Full name of the team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shortName",
						"short": "Short name of the team",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tla",
						"short": "Three-letter abbreviation",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venue",
						"short": "Home venue/stadium",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "website",
						"short": "Team website URL",
						"type": "`$STRING`",
					},
				},
				"name": "team",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 2006,
											"kind": "param",
											"name": "competition_id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 2024,
											"kind": "query",
											"name": "season",
											"orig": "season",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/competitions/{id}/teams",
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
								"select": map[string]any{
									"exist": []any{
										"competition_id",
										"season",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"competition",
						},
					},
				},
			},
		},
	}
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
