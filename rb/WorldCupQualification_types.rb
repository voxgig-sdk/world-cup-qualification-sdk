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
# @!attribute [rw] current_season
#   @return [Hash, nil]
#
# @!attribute [rw] emblem
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_updated
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] number_of_available_season
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
  :current_season,
  :emblem,
  :id,
  :last_updated,
  :name,
  :number_of_available_season,
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

# Match filter for Competition#list (any subset of Competition fields).
#
# @!attribute [rw] area
#   @return [Hash, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] current_season
#   @return [Hash, nil]
#
# @!attribute [rw] emblem
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_updated
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] number_of_available_season
#   @return [Integer, nil]
#
# @!attribute [rw] plan
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
CompetitionListMatch = Struct.new(
  :area,
  :code,
  :current_season,
  :emblem,
  :id,
  :last_updated,
  :name,
  :number_of_available_season,
  :plan,
  :type,
  keyword_init: true
)

# Match entity data model.
#
# @!attribute [rw] away_team
#   @return [Hash, nil]
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] home_team
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] matchday
#   @return [Integer, nil]
#
# @!attribute [rw] referee
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
# @!attribute [rw] utc_date
#   @return [String, nil]
Match = Struct.new(
  :away_team,
  :group,
  :home_team,
  :id,
  :matchday,
  :referee,
  :score,
  :stage,
  :status,
  :utc_date,
  keyword_init: true
)

# Request payload for Match#list.
#
# @!attribute [rw] competition_id
#   @return [Integer]
MatchListMatch = Struct.new(
  :competition_id,
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
StandingListMatch = Struct.new(
  :competition_id,
  keyword_init: true
)

# Team entity data model.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] club_color
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
# @!attribute [rw] last_updated
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] short_name
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
  :club_color,
  :crest,
  :founded,
  :id,
  :last_updated,
  :name,
  :short_name,
  :tla,
  :venue,
  :website,
  keyword_init: true
)

# Request payload for Team#list.
#
# @!attribute [rw] competition_id
#   @return [Integer]
TeamListMatch = Struct.new(
  :competition_id,
  keyword_init: true
)

