<?php
declare(strict_types=1);

// WorldCupQualification SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class WorldCupQualificationFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new WorldCupQualificationBaseFeature();
            case "test":
                return new WorldCupQualificationTestFeature();
            default:
                return new WorldCupQualificationBaseFeature();
        }
    }
}
