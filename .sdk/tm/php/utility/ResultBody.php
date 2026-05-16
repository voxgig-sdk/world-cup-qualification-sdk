<?php
declare(strict_types=1);

// WorldCupQualification SDK utility: result_body

class WorldCupQualificationResultBody
{
    public static function call(WorldCupQualificationContext $ctx): ?WorldCupQualificationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
