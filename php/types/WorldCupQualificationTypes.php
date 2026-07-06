<?php
declare(strict_types=1);

// Typed models for the WorldCupQualification SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Competition entity data model. */
class Competition
{
    public ?array $area = null;
    public ?string $code = null;
    public ?array $current_season = null;
    public ?string $emblem = null;
    public ?int $id = null;
    public ?string $last_updated = null;
    public ?string $name = null;
    public ?int $number_of_available_season = null;
    public ?string $plan = null;
    public ?string $type = null;
}

/** Request payload for Competition#load. */
class CompetitionLoadMatch
{
    public int $id;
}

/** Request payload for Competition#list. */
class CompetitionListMatch
{
    public ?array $area = null;
    public ?string $code = null;
    public ?array $current_season = null;
    public ?string $emblem = null;
    public ?int $id = null;
    public ?string $last_updated = null;
    public ?string $name = null;
    public ?int $number_of_available_season = null;
    public ?string $plan = null;
    public ?string $type = null;
}

/** Match entity data model. */
class Match
{
    public ?array $away_team = null;
    public ?string $group = null;
    public ?array $home_team = null;
    public ?int $id = null;
    public ?int $matchday = null;
    public ?array $referee = null;
    public ?array $score = null;
    public ?string $stage = null;
    public ?string $status = null;
    public ?string $utc_date = null;
}

/** Request payload for Match#list. */
class MatchListMatch
{
    public int $competition_id;
}

/** Standing entity data model. */
class Standing
{
    public ?string $group = null;
    public ?string $stage = null;
    public ?array $table = null;
    public ?string $type = null;
}

/** Request payload for Standing#list. */
class StandingListMatch
{
    public int $competition_id;
}

/** Team entity data model. */
class Team
{
    public ?string $address = null;
    public ?string $club_color = null;
    public ?string $crest = null;
    public ?int $founded = null;
    public ?int $id = null;
    public ?string $last_updated = null;
    public ?string $name = null;
    public ?string $short_name = null;
    public ?string $tla = null;
    public ?string $venue = null;
    public ?string $website = null;
}

/** Request payload for Team#list. */
class TeamListMatch
{
    public int $competition_id;
}

