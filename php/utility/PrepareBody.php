<?php
declare(strict_types=1);

// WorldCupQualification SDK utility: prepare_body

class WorldCupQualificationPrepareBody
{
    public static function call(WorldCupQualificationContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
