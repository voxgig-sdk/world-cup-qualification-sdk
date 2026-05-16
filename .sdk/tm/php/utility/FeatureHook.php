<?php
declare(strict_types=1);

// WorldCupQualification SDK utility: feature_hook

class WorldCupQualificationFeatureHook
{
    public static function call(WorldCupQualificationContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
