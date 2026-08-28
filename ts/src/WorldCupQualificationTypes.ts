// Typed models for the WorldCupQualification SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Competition {
  area?: Record<string, any>
  code?: string
  currentSeason?: Record<string, any>
  emblem?: string
  id?: number
  lastUpdated?: string
  name?: string
  numberOfAvailableSeasons?: number
  plan?: string
  type?: string
}

export interface CompetitionLoadMatch {
  id: number
}

export interface CompetitionListMatch {
  area?: string
  plan?: string
}

export interface Match {
  awayTeam?: Record<string, any>
  group?: string
  homeTeam?: Record<string, any>
  id?: number
  matchday?: number
  referees?: any[]
  score?: Record<string, any>
  stage?: string
  status?: string
  utcDate?: string
}

export interface MatchListMatch {
  competition_id: number
  date_from?: string
  date_to?: string
  matchday?: number
  season?: number
  status?: string
}

export interface Standing {
  group?: string
  stage?: string
  table?: any[]
  type?: string
}

export interface StandingListMatch {
  competition_id: number
  matchday?: number
  season?: number
}

export interface Team {
  address?: string
  clubColors?: string
  crest?: string
  founded?: number
  id?: number
  lastUpdated?: string
  name?: string
  shortName?: string
  tla?: string
  venue?: string
  website?: string
}

export interface TeamListMatch {
  competition_id: number
  season?: number
}

