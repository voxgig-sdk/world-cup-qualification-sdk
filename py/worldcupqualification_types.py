# Typed models for the WorldCupQualification SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Competition:
    area: Optional[dict] = None
    code: Optional[str] = None
    current_season: Optional[dict] = None
    emblem: Optional[str] = None
    id: Optional[int] = None
    last_updated: Optional[str] = None
    name: Optional[str] = None
    number_of_available_season: Optional[int] = None
    plan: Optional[str] = None
    type: Optional[str] = None


@dataclass
class CompetitionLoadMatch:
    id: int


@dataclass
class CompetitionListMatch:
    area: Optional[dict] = None
    code: Optional[str] = None
    current_season: Optional[dict] = None
    emblem: Optional[str] = None
    id: Optional[int] = None
    last_updated: Optional[str] = None
    name: Optional[str] = None
    number_of_available_season: Optional[int] = None
    plan: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Match:
    away_team: Optional[dict] = None
    group: Optional[str] = None
    home_team: Optional[dict] = None
    id: Optional[int] = None
    matchday: Optional[int] = None
    referee: Optional[list] = None
    score: Optional[dict] = None
    stage: Optional[str] = None
    status: Optional[str] = None
    utc_date: Optional[str] = None


@dataclass
class MatchListMatch:
    competition_id: int


@dataclass
class Standing:
    group: Optional[str] = None
    stage: Optional[str] = None
    table: Optional[list] = None
    type: Optional[str] = None


@dataclass
class StandingListMatch:
    competition_id: int


@dataclass
class Team:
    address: Optional[str] = None
    club_color: Optional[str] = None
    crest: Optional[str] = None
    founded: Optional[int] = None
    id: Optional[int] = None
    last_updated: Optional[str] = None
    name: Optional[str] = None
    short_name: Optional[str] = None
    tla: Optional[str] = None
    venue: Optional[str] = None
    website: Optional[str] = None


@dataclass
class TeamListMatch:
    competition_id: int

