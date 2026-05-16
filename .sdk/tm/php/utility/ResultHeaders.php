<?php
declare(strict_types=1);

// WorldCupQualification SDK utility: result_headers

class WorldCupQualificationResultHeaders
{
    public static function call(WorldCupQualificationContext $ctx): ?WorldCupQualificationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
