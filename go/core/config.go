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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currentSeason",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "emblem",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "lastUpdated",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "numberOfAvailableSeasons",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "plan",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "homeTeam",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "matchday",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "utcDate",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "table",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "clubColors",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "crest",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "founded",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "lastUpdated",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shortName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tla",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venue",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "website",
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
