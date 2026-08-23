# WorldCupQualification SDK configuration

module WorldCupQualificationConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "WorldCupQualification",
        "slug" => "world-cup-qualification",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.football-data.org/v4",
        "auth" => {
          "prefix" => "",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "competition" => {},
          "match" => {},
          "standing" => {},
          "team" => {},
        },
      },
      "entity" => {
        "competition" => {
          "fields" => [
            {
              "name" => "area",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "code",
              "short" => "Short code for the competition",
              "type" => "`$STRING`",
            },
            {
              "name" => "currentSeason",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "emblem",
              "short" => "URL to competition emblem/logo",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the competition",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "lastUpdated",
              "short" => "Last update timestamp",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the competition",
              "type" => "`$STRING`",
            },
            {
              "name" => "numberOfAvailableSeasons",
              "short" => "Number of seasons available in the API",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "plan",
              "short" => "API access tier required",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "short" => "Type of competition",
              "type" => "`$STRING`",
            },
          ],
          "name" => "competition",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "AFR,UEFA",
                        "kind" => "query",
                        "name" => "area",
                        "orig" => "area",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "plan",
                        "orig" => "plan",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/competitions",
                  "parts" => [
                    "competitions",
                  ],
                  "select" => {
                    "exist" => [
                      "area",
                      "plan",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 2006,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/competitions/{id}",
                  "parts" => [
                    "competitions",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "match" => {
          "fields" => [
            {
              "name" => "awayTeam",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "group",
              "short" => "Group identifier for group stage matches",
              "type" => "`$STRING`",
            },
            {
              "name" => "homeTeam",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "id",
              "short" => "Unique match identifier",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "matchday",
              "short" => "Matchday number",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "referees",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "score",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "stage",
              "short" => "Competition stage (e.g., GROUP_STAGE, KNOCKOUT)",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "short" => "Current match status",
              "type" => "`$STRING`",
            },
            {
              "name" => "utcDate",
              "short" => "Match date and time in UTC",
              "type" => "`$STRING`",
            },
          ],
          "name" => "match",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 2006,
                        "kind" => "param",
                        "name" => "competition_id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => "2024-01-01",
                        "kind" => "query",
                        "name" => "date_from",
                        "orig" => "date_from",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "2024-12-31",
                        "kind" => "query",
                        "name" => "date_to",
                        "orig" => "date_to",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "matchday",
                        "orig" => "matchday",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 2024,
                        "kind" => "query",
                        "name" => "season",
                        "orig" => "season",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "status",
                        "orig" => "status",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/competitions/{id}/matches",
                  "parts" => [
                    "competitions",
                    "{competition_id}",
                    "matches",
                  ],
                  "rename" => {
                    "param" => {
                      "id" => "competition_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "competition_id",
                      "date_from",
                      "date_to",
                      "matchday",
                      "season",
                      "status",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "competition",
              ],
            ],
          },
        },
        "standing" => {
          "fields" => [
            {
              "name" => "group",
              "short" => "Group identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "stage",
              "short" => "Competition stage",
              "type" => "`$STRING`",
            },
            {
              "name" => "table",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "type",
              "short" => "Type of standing",
              "type" => "`$STRING`",
            },
          ],
          "name" => "standing",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 2006,
                        "kind" => "param",
                        "name" => "competition_id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "matchday",
                        "orig" => "matchday",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 2024,
                        "kind" => "query",
                        "name" => "season",
                        "orig" => "season",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/competitions/{id}/standings",
                  "parts" => [
                    "competitions",
                    "{competition_id}",
                    "standings",
                  ],
                  "rename" => {
                    "param" => {
                      "id" => "competition_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "competition_id",
                      "matchday",
                      "season",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "competition",
              ],
            ],
          },
        },
        "team" => {
          "fields" => [
            {
              "name" => "address",
              "short" => "Team address",
              "type" => "`$STRING`",
            },
            {
              "name" => "clubColors",
              "short" => "Team colors",
              "type" => "`$STRING`",
            },
            {
              "name" => "crest",
              "short" => "URL to team crest/logo",
              "type" => "`$STRING`",
            },
            {
              "name" => "founded",
              "short" => "Year the team was founded",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the team",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "lastUpdated",
              "short" => "Last update timestamp",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Full name of the team",
              "type" => "`$STRING`",
            },
            {
              "name" => "shortName",
              "short" => "Short name of the team",
              "type" => "`$STRING`",
            },
            {
              "name" => "tla",
              "short" => "Three-letter abbreviation",
              "type" => "`$STRING`",
            },
            {
              "name" => "venue",
              "short" => "Home venue/stadium",
              "type" => "`$STRING`",
            },
            {
              "name" => "website",
              "short" => "Team website URL",
              "type" => "`$STRING`",
            },
          ],
          "name" => "team",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 2006,
                        "kind" => "param",
                        "name" => "competition_id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => 2024,
                        "kind" => "query",
                        "name" => "season",
                        "orig" => "season",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/competitions/{id}/teams",
                  "parts" => [
                    "competitions",
                    "{competition_id}",
                    "teams",
                  ],
                  "rename" => {
                    "param" => {
                      "id" => "competition_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "competition_id",
                      "season",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "competition",
              ],
            ],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    WorldCupQualificationFeatures.make_feature(name)
  end
end
