-- Typed models for the WorldCupQualification SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Competition
---@field area? table
---@field code? string
---@field current_season? table
---@field emblem? string
---@field id? number
---@field last_updated? string
---@field name? string
---@field number_of_available_season? number
---@field plan? string
---@field type? string

---@class CompetitionLoadMatch
---@field id number

---@class CompetitionListMatch
---@field area? table
---@field code? string
---@field current_season? table
---@field emblem? string
---@field id? number
---@field last_updated? string
---@field name? string
---@field number_of_available_season? number
---@field plan? string
---@field type? string

---@class Match
---@field away_team? table
---@field group? string
---@field home_team? table
---@field id? number
---@field matchday? number
---@field referee? table
---@field score? table
---@field stage? string
---@field status? string
---@field utc_date? string

---@class MatchListMatch
---@field competition_id number

---@class Standing
---@field group? string
---@field stage? string
---@field table? table
---@field type? string

---@class StandingListMatch
---@field competition_id number

---@class Team
---@field address? string
---@field club_color? string
---@field crest? string
---@field founded? number
---@field id? number
---@field last_updated? string
---@field name? string
---@field short_name? string
---@field tla? string
---@field venue? string
---@field website? string

---@class TeamListMatch
---@field competition_id number

local M = {}

return M
