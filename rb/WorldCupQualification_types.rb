# frozen_string_literal: true

# Typed models for the WorldCupQualification SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Competition entity data model.
#
# @!attribute [rw] area
#   @return [Hash, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] currentSeason
#   @return [Hash, nil]
#
# @!attribute [rw] emblem
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] lastUpdated
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] numberOfAvailableSeasons
#   @return [Integer, nil]
#
# @!attribute [rw] plan
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Competition = Struct.new(
  :area,
  :code,
  :currentSeason,
  :emblem,
  :id,
  :lastUpdated,
  :name,
  :numberOfAvailableSeasons,
  :plan,
  :type,
  keyword_init: true
)

# Request payload for Competition#load.
#
# @!attribute [rw] id
#   @return [Integer]
CompetitionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Competition#list.
#
# @!attribute [rw] area
#   @return [String, nil]
#
# @!attribute [rw] plan
#   @return [String, nil]
CompetitionListMatch = Struct.new(
  :area,
  :plan,
  keyword_init: true
)

# Match entity data model.
#
# @!attribute [rw] awayTeam
#   @return [Hash, nil]
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] homeTeam
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] matchday
#   @return [Integer, nil]
#
# @!attribute [rw] referees
#   @return [Array, nil]
#
# @!attribute [rw] score
#   @return [Hash, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] utcDate
#   @return [String, nil]
Match = Struct.new(
  :awayTeam,
  :group,
  :homeTeam,
  :id,
  :matchday,
  :referees,
  :score,
  :stage,
  :status,
  :utcDate,
  keyword_init: true
)

# Request payload for Match#list.
#
# @!attribute [rw] competition_id
#   @return [Integer]
#
# @!attribute [rw] date_from
#   @return [String, nil]
#
# @!attribute [rw] date_to
#   @return [String, nil]
#
# @!attribute [rw] matchday
#   @return [Integer, nil]
#
# @!attribute [rw] season
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
MatchListMatch = Struct.new(
  :competition_id,
  :date_from,
  :date_to,
  :matchday,
  :season,
  :status,
  keyword_init: true
)

# Standing entity data model.
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [String, nil]
#
# @!attribute [rw] table
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Standing = Struct.new(
  :group,
  :stage,
  :table,
  :type,
  keyword_init: true
)

# Request payload for Standing#list.
#
# @!attribute [rw] competition_id
#   @return [Integer]
#
# @!attribute [rw] matchday
#   @return [Integer, nil]
#
# @!attribute [rw] season
#   @return [Integer, nil]
StandingListMatch = Struct.new(
  :competition_id,
  :matchday,
  :season,
  keyword_init: true
)

# Team entity data model.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] clubColors
#   @return [String, nil]
#
# @!attribute [rw] crest
#   @return [String, nil]
#
# @!attribute [rw] founded
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] lastUpdated
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] shortName
#   @return [String, nil]
#
# @!attribute [rw] tla
#   @return [String, nil]
#
# @!attribute [rw] venue
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
Team = Struct.new(
  :address,
  :clubColors,
  :crest,
  :founded,
  :id,
  :lastUpdated,
  :name,
  :shortName,
  :tla,
  :venue,
  :website,
  keyword_init: true
)

# Request payload for Team#list.
#
# @!attribute [rw] competition_id
#   @return [Integer]
#
# @!attribute [rw] season
#   @return [Integer, nil]
TeamListMatch = Struct.new(
  :competition_id,
  :season,
  keyword_init: true
)

