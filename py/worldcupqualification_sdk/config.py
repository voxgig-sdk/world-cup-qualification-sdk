# WorldCupQualification SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "WorldCupQualification",
            "slug": "world-cup-qualification",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.football-data.org/v4",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "competition": {},
                "match": {},
                "standing": {},
                "team": {},
            },
        },
        "entity": {
      "competition": {
        "fields": [
          {
            "name": "area",
            "type": "`$OBJECT`",
          },
          {
            "name": "code",
            "short": "Short code for the competition",
            "type": "`$STRING`",
          },
          {
            "name": "currentSeason",
            "type": "`$OBJECT`",
          },
          {
            "name": "emblem",
            "short": "URL to competition emblem/logo",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the competition",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "lastUpdated",
            "short": "Last update timestamp",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the competition",
            "type": "`$STRING`",
          },
          {
            "name": "numberOfAvailableSeasons",
            "short": "Number of seasons available in the API",
            "type": "`$INTEGER`",
          },
          {
            "name": "plan",
            "short": "API access tier required",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Type of competition",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "competition",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "AFR,UEFA",
                      "kind": "query",
                      "name": "area",
                      "orig": "area",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "plan",
                      "orig": "plan",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/competitions",
                "segments": [
                  {
                    "lit": "competitions",
                  },
                ],
                "select": {
                  "exist": [
                    "area",
                    "plan",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "competitions",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 2006,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/competitions/{id}",
                "segments": [
                  {
                    "lit": "competitions",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "competitions",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "match": {
        "fields": [
          {
            "name": "awayTeam",
            "type": "`$OBJECT`",
          },
          {
            "name": "group",
            "short": "Group identifier for group stage matches",
            "type": "`$STRING`",
          },
          {
            "name": "homeTeam",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "short": "Unique match identifier",
            "type": "`$INTEGER`",
          },
          {
            "name": "matchday",
            "short": "Matchday number",
            "type": "`$INTEGER`",
          },
          {
            "name": "referees",
            "type": "`$ARRAY`",
          },
          {
            "name": "score",
            "type": "`$OBJECT`",
          },
          {
            "name": "stage",
            "short": "Competition stage (e.g., GROUP_STAGE, KNOCKOUT)",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "Current match status",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "utcDate",
            "short": "Match date and time in UTC",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "match",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 2006,
                      "kind": "param",
                      "name": "competition_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": "2024-01-01",
                      "kind": "query",
                      "name": "date_from",
                      "orig": "date_from",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "2024-12-31",
                      "kind": "query",
                      "name": "date_to",
                      "orig": "date_to",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "matchday",
                      "orig": "matchday",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 2024,
                      "kind": "query",
                      "name": "season",
                      "orig": "season",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/competitions/{id}/matches",
                "rename": {
                  "param": {
                    "id": "competition_id",
                  },
                },
                "segments": [
                  {
                    "lit": "competitions",
                  },
                  {
                    "var": "competition_id",
                  },
                  {
                    "lit": "matches",
                  },
                ],
                "select": {
                  "exist": [
                    "competition_id",
                    "date_from",
                    "date_to",
                    "matchday",
                    "season",
                    "status",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "competitions",
                  "{competition_id}",
                  "matches",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "competition",
            ],
          ],
        },
      },
      "standing": {
        "fields": [
          {
            "name": "group",
            "short": "Group identifier",
            "type": "`$STRING`",
          },
          {
            "name": "stage",
            "short": "Competition stage",
            "type": "`$STRING`",
          },
          {
            "name": "table",
            "type": "`$ARRAY`",
          },
          {
            "name": "type",
            "short": "Type of standing",
            "type": "`$STRING`",
          },
        ],
        "name": "standing",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 2006,
                      "kind": "param",
                      "name": "competition_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "matchday",
                      "orig": "matchday",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 2024,
                      "kind": "query",
                      "name": "season",
                      "orig": "season",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/competitions/{id}/standings",
                "rename": {
                  "param": {
                    "id": "competition_id",
                  },
                },
                "segments": [
                  {
                    "lit": "competitions",
                  },
                  {
                    "var": "competition_id",
                  },
                  {
                    "lit": "standings",
                  },
                ],
                "select": {
                  "exist": [
                    "competition_id",
                    "matchday",
                    "season",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "competitions",
                  "{competition_id}",
                  "standings",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "competition",
            ],
          ],
        },
      },
      "team": {
        "fields": [
          {
            "name": "address",
            "short": "Team address",
            "type": "`$STRING`",
          },
          {
            "name": "clubColors",
            "short": "Team colors",
            "type": "`$STRING`",
          },
          {
            "name": "crest",
            "short": "URL to team crest/logo",
            "type": "`$STRING`",
          },
          {
            "name": "founded",
            "short": "Year the team was founded",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the team",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "lastUpdated",
            "short": "Last update timestamp",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Full name of the team",
            "type": "`$STRING`",
          },
          {
            "name": "shortName",
            "short": "Short name of the team",
            "type": "`$STRING`",
          },
          {
            "name": "tla",
            "short": "Three-letter abbreviation",
            "type": "`$STRING`",
          },
          {
            "name": "venue",
            "short": "Home venue/stadium",
            "type": "`$STRING`",
          },
          {
            "name": "website",
            "short": "Team website URL",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "team",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 2006,
                      "kind": "param",
                      "name": "competition_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": 2024,
                      "kind": "query",
                      "name": "season",
                      "orig": "season",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/competitions/{id}/teams",
                "rename": {
                  "param": {
                    "id": "competition_id",
                  },
                },
                "segments": [
                  {
                    "lit": "competitions",
                  },
                  {
                    "var": "competition_id",
                  },
                  {
                    "lit": "teams",
                  },
                ],
                "select": {
                  "exist": [
                    "competition_id",
                    "season",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "competitions",
                  "{competition_id}",
                  "teams",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "competition",
            ],
          ],
        },
      },
    },
    }
