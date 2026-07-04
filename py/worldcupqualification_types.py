# Typed models for the WorldCupQualification SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Competition(TypedDict, total=False):
    area: dict
    code: str
    current_season: dict
    emblem: str
    id: int
    last_updated: str
    name: str
    number_of_available_season: int
    plan: str
    type: str


class CompetitionLoadMatch(TypedDict):
    id: int


class CompetitionListMatch(TypedDict, total=False):
    area: dict
    code: str
    current_season: dict
    emblem: str
    id: int
    last_updated: str
    name: str
    number_of_available_season: int
    plan: str
    type: str


class Match(TypedDict, total=False):
    away_team: dict
    group: str
    home_team: dict
    id: int
    matchday: int
    referee: list
    score: dict
    stage: str
    status: str
    utc_date: str


class MatchListMatch(TypedDict):
    competition_id: int


class Standing(TypedDict, total=False):
    group: str
    stage: str
    table: list
    type: str


class StandingListMatch(TypedDict):
    competition_id: int


class Team(TypedDict, total=False):
    address: str
    club_color: str
    crest: str
    founded: int
    id: int
    last_updated: str
    name: str
    short_name: str
    tla: str
    venue: str
    website: str


class TeamListMatch(TypedDict):
    competition_id: int
