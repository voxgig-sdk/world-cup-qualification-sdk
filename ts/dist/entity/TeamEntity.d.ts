import { WorldCupQualificationEntityBase } from '../WorldCupQualificationEntityBase';
import type { WorldCupQualificationSDK } from '../WorldCupQualificationSDK';
import type { Control } from '../types';
import type { Team, TeamListMatch } from '../WorldCupQualificationTypes';
declare class TeamEntity extends WorldCupQualificationEntityBase<Team> {
    constructor(client: WorldCupQualificationSDK, entopts: any);
    make(this: TeamEntity): TeamEntity;
    list(this: any, reqmatch?: TeamListMatch, ctrl?: Control): Promise<TeamEntity[]>;
}
export { TeamEntity };
