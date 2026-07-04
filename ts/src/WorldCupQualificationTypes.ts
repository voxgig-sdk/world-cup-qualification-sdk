// Typed models for the WorldCupQualification SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Competition {
  area?: Record<string, any>
  code?: string
  current_season?: Record<string, any>
  emblem?: string
  id?: number
  last_updated?: string
  name?: string
  number_of_available_season?: number
  plan?: string
  type?: string
}

export interface CompetitionLoadMatch {
  id: number
}

export type CompetitionListMatch = Partial<Competition>

export interface Match {
  away_team?: Record<string, any>
  group?: string
  home_team?: Record<string, any>
  id?: number
  matchday?: number
  referee?: any[]
  score?: Record<string, any>
  stage?: string
  status?: string
  utc_date?: string
}

export interface MatchListMatch {
  competition_id: number
}

export interface Standing {
  group?: string
  stage?: string
  table?: any[]
  type?: string
}

export interface StandingListMatch {
  competition_id: number
}

export interface Team {
  address?: string
  club_color?: string
  crest?: string
  founded?: number
  id?: number
  last_updated?: string
  name?: string
  short_name?: string
  tla?: string
  venue?: string
  website?: string
}

export interface TeamListMatch {
  competition_id: number
}

