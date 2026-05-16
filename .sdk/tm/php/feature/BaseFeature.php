<?php
declare(strict_types=1);

// WorldCupQualification SDK base feature

class WorldCupQualificationBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WorldCupQualificationContext $ctx, array $options): void {}
    public function PostConstruct(WorldCupQualificationContext $ctx): void {}
    public function PostConstructEntity(WorldCupQualificationContext $ctx): void {}
    public function SetData(WorldCupQualificationContext $ctx): void {}
    public function GetData(WorldCupQualificationContext $ctx): void {}
    public function GetMatch(WorldCupQualificationContext $ctx): void {}
    public function SetMatch(WorldCupQualificationContext $ctx): void {}
    public function PrePoint(WorldCupQualificationContext $ctx): void {}
    public function PreSpec(WorldCupQualificationContext $ctx): void {}
    public function PreRequest(WorldCupQualificationContext $ctx): void {}
    public function PreResponse(WorldCupQualificationContext $ctx): void {}
    public function PreResult(WorldCupQualificationContext $ctx): void {}
    public function PreDone(WorldCupQualificationContext $ctx): void {}
    public function PreUnexpected(WorldCupQualificationContext $ctx): void {}
}
