<?php
declare(strict_types=1);

// WorldCupQualification SDK utility: feature_add

class WorldCupQualificationFeatureAdd
{
    public static function call(WorldCupQualificationContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
