-- WorldCupQualification SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "WorldCupQualification",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.football-data.org/v4",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["competition"] = {},
        ["match"] = {},
        ["standing"] = {},
        ["team"] = {},
      },
    },
    entity = {
      ["competition"] = {
        ["fields"] = {
          {
            ["name"] = "area",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "currentSeason",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "emblem",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "lastUpdated",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "numberOfAvailableSeasons",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "plan",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "competition",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "AFR,UEFA",
                      ["kind"] = "query",
                      ["name"] = "area",
                      ["orig"] = "area",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "plan",
                      ["orig"] = "plan",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/competitions",
                ["parts"] = {
                  "competitions",
                },
                ["select"] = {
                  ["exist"] = {
                    "area",
                    "plan",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 2006,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/competitions/{id}",
                ["parts"] = {
                  "competitions",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["match"] = {
        ["fields"] = {
          {
            ["name"] = "awayTeam",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "group",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "homeTeam",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "matchday",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "referees",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "score",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "stage",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "utcDate",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "match",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 2006,
                      ["kind"] = "param",
                      ["name"] = "competition_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "2024-01-01",
                      ["kind"] = "query",
                      ["name"] = "date_from",
                      ["orig"] = "date_from",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "2024-12-31",
                      ["kind"] = "query",
                      ["name"] = "date_to",
                      ["orig"] = "date_to",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "matchday",
                      ["orig"] = "matchday",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 2024,
                      ["kind"] = "query",
                      ["name"] = "season",
                      ["orig"] = "season",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/competitions/{id}/matches",
                ["parts"] = {
                  "competitions",
                  "{competition_id}",
                  "matches",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "competition_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "competition_id",
                    "date_from",
                    "date_to",
                    "matchday",
                    "season",
                    "status",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "competition",
            },
          },
        },
      },
      ["standing"] = {
        ["fields"] = {
          {
            ["name"] = "group",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stage",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "table",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "standing",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 2006,
                      ["kind"] = "param",
                      ["name"] = "competition_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "matchday",
                      ["orig"] = "matchday",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 2024,
                      ["kind"] = "query",
                      ["name"] = "season",
                      ["orig"] = "season",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/competitions/{id}/standings",
                ["parts"] = {
                  "competitions",
                  "{competition_id}",
                  "standings",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "competition_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "competition_id",
                    "matchday",
                    "season",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "competition",
            },
          },
        },
      },
      ["team"] = {
        ["fields"] = {
          {
            ["name"] = "address",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "clubColors",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "crest",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "founded",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "lastUpdated",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "shortName",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tla",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "venue",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "website",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "team",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 2006,
                      ["kind"] = "param",
                      ["name"] = "competition_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = 2024,
                      ["kind"] = "query",
                      ["name"] = "season",
                      ["orig"] = "season",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/competitions/{id}/teams",
                ["parts"] = {
                  "competitions",
                  "{competition_id}",
                  "teams",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "competition_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "competition_id",
                    "season",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "competition",
            },
          },
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
