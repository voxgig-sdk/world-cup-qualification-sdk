<?php
declare(strict_types=1);

// WorldCupQualification SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WorldCupQualificationMakeContext
{
    public static function call(array $ctxmap, ?WorldCupQualificationContext $basectx): WorldCupQualificationContext
    {
        return new WorldCupQualificationContext($ctxmap, $basectx);
    }
}
