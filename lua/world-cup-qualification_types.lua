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
---@field currentSeason? table
---@field emblem? string
---@field id? number
---@field lastUpdated? string
---@field name? string
---@field numberOfAvailableSeasons? number
---@field plan? string
---@field type? string

---@class CompetitionLoadMatch
---@field id number

---@class CompetitionListMatch
---@field area? string
---@field plan? string

---@class Match
---@field awayTeam? table
---@field group? string
---@field homeTeam? table
---@field id? number
---@field matchday? number
---@field referees? table
---@field score? table
---@field stage? string
---@field status? string
---@field utcDate? string

---@class MatchListMatch
---@field competition_id number
---@field date_from? string
---@field date_to? string
---@field matchday? number
---@field season? number
---@field status? string

---@class Standing
---@field group? string
---@field stage? string
---@field table? table
---@field type? string

---@class StandingListMatch
---@field competition_id number
---@field matchday? number
---@field season? number

---@class Team
---@field address? string
---@field clubColors? string
---@field crest? string
---@field founded? number
---@field id? number
---@field lastUpdated? string
---@field name? string
---@field shortName? string
---@field tla? string
---@field venue? string
---@field website? string

---@class TeamListMatch
---@field competition_id number
---@field season? number

local M = {}

return M
