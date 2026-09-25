"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'WorldCupQualification',
        slug: "world-cup-qualification",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.football-data.org/v4",
        auth: {
            prefix: '',
            name: 'X-Auth-Token',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            competition: {},
            match: {},
            standing: {},
            team: {},
        }
    };
    entity = {
        "competition": {
            "fields": [
                {
                    "name": "area",
                    "title": "Area",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "code",
                    "title": "Code",
                    "type": "`$STRING`",
                    "short": "Short code for the competition"
                },
                {
                    "name": "currentSeason",
                    "title": "Current Season",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "emblem",
                    "title": "Emblem",
                    "type": "`$STRING`",
                    "short": "URL to competition emblem/logo"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "Unique identifier for the competition"
                },
                {
                    "name": "lastUpdated",
                    "title": "Last Updated",
                    "type": "`$STRING`",
                    "short": "Last update timestamp",
                    "format": "date-time"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Name of the competition"
                },
                {
                    "name": "numberOfAvailableSeasons",
                    "title": "Number Of Available Seasons",
                    "type": "`$INTEGER`",
                    "short": "Number of seasons available in the API"
                },
                {
                    "name": "plan",
                    "title": "Plan",
                    "type": "`$STRING`",
                    "short": "API access tier required"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`",
                    "short": "Type of competition"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "competition",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/competitions",
                            "segments": [
                                {
                                    "lit": "competitions"
                                }
                            ],
                            "parts": [
                                "competitions"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "area",
                                        "orig": "area",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "AFR,UEFA"
                                    },
                                    {
                                        "name": "plan",
                                        "orig": "plan",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "area",
                                    "plan"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/competitions/{id}",
                            "segments": [
                                {
                                    "lit": "competitions"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "competitions",
                                "{id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 2006
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "match": {
            "fields": [
                {
                    "name": "awayTeam",
                    "title": "Away Team",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "group",
                    "title": "Group",
                    "type": "`$STRING`",
                    "short": "Group identifier for group stage matches"
                },
                {
                    "name": "homeTeam",
                    "title": "Home Team",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "Unique match identifier"
                },
                {
                    "name": "matchday",
                    "title": "Matchday",
                    "type": "`$INTEGER`",
                    "short": "Matchday number"
                },
                {
                    "name": "referees",
                    "title": "Referees",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "score",
                    "title": "Score",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "stage",
                    "title": "Stage",
                    "type": "`$STRING`",
                    "short": "Competition stage (e.g., GROUP_STAGE, KNOCKOUT)"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "short": "Current match status"
                },
                {
                    "name": "utcDate",
                    "title": "Utc Date",
                    "type": "`$STRING`",
                    "short": "Match date and time in UTC",
                    "format": "date-time"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "match",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/competitions/{id}/matches",
                            "segments": [
                                {
                                    "lit": "competitions"
                                },
                                {
                                    "var": "competition_id"
                                },
                                {
                                    "lit": "matches"
                                }
                            ],
                            "parts": [
                                "competitions",
                                "{competition_id}",
                                "matches"
                            ],
                            "rename": {
                                "param": {
                                    "id": "competition_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "competition_id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 2006
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "date_from",
                                        "orig": "date_from",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2024-01-01"
                                    },
                                    {
                                        "name": "date_to",
                                        "orig": "date_to",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2024-12-31"
                                    },
                                    {
                                        "name": "matchday",
                                        "orig": "matchday",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "season",
                                        "orig": "season",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 2024
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "competition_id",
                                    "date_from",
                                    "date_to",
                                    "matchday",
                                    "season",
                                    "status"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.competition"
                    ]
                ]
            }
        },
        "standing": {
            "fields": [
                {
                    "name": "group",
                    "title": "Group",
                    "type": "`$STRING`",
                    "short": "Group identifier"
                },
                {
                    "name": "stage",
                    "title": "Stage",
                    "type": "`$STRING`",
                    "short": "Competition stage"
                },
                {
                    "name": "table",
                    "title": "Table",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`",
                    "short": "Type of standing"
                }
            ],
            "name": "standing",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/competitions/{id}/standings",
                            "segments": [
                                {
                                    "lit": "competitions"
                                },
                                {
                                    "var": "competition_id"
                                },
                                {
                                    "lit": "standings"
                                }
                            ],
                            "parts": [
                                "competitions",
                                "{competition_id}",
                                "standings"
                            ],
                            "rename": {
                                "param": {
                                    "id": "competition_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "competition_id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 2006
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "matchday",
                                        "orig": "matchday",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "season",
                                        "orig": "season",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 2024
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "competition_id",
                                    "matchday",
                                    "season"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.competition"
                    ]
                ]
            }
        },
        "team": {
            "fields": [
                {
                    "name": "address",
                    "title": "Address",
                    "type": "`$STRING`",
                    "short": "Team address"
                },
                {
                    "name": "clubColors",
                    "title": "Club Colors",
                    "type": "`$STRING`",
                    "short": "Team colors"
                },
                {
                    "name": "crest",
                    "title": "Crest",
                    "type": "`$STRING`",
                    "short": "URL to team crest/logo"
                },
                {
                    "name": "founded",
                    "title": "Founded",
                    "type": "`$INTEGER`",
                    "short": "Year the team was founded"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "Unique identifier for the team"
                },
                {
                    "name": "lastUpdated",
                    "title": "Last Updated",
                    "type": "`$STRING`",
                    "short": "Last update timestamp",
                    "format": "date-time"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Full name of the team"
                },
                {
                    "name": "shortName",
                    "title": "Short Name",
                    "type": "`$STRING`",
                    "short": "Short name of the team"
                },
                {
                    "name": "tla",
                    "title": "Tla",
                    "type": "`$STRING`",
                    "short": "Three-letter abbreviation"
                },
                {
                    "name": "venue",
                    "title": "Venue",
                    "type": "`$STRING`",
                    "short": "Home venue/stadium"
                },
                {
                    "name": "website",
                    "title": "Website",
                    "type": "`$STRING`",
                    "short": "Team website URL"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "team",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/competitions/{id}/teams",
                            "segments": [
                                {
                                    "lit": "competitions"
                                },
                                {
                                    "var": "competition_id"
                                },
                                {
                                    "lit": "teams"
                                }
                            ],
                            "parts": [
                                "competitions",
                                "{competition_id}",
                                "teams"
                            ],
                            "rename": {
                                "param": {
                                    "id": "competition_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "competition_id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 2006
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "season",
                                        "orig": "season",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 2024
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "competition_id",
                                    "season"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.competition"
                    ]
                ]
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map