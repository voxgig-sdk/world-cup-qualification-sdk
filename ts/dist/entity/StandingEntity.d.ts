import { WorldCupQualificationEntityBase } from '../WorldCupQualificationEntityBase';
import type { WorldCupQualificationSDK } from '../WorldCupQualificationSDK';
import type { Control } from '../types';
import type { Standing, StandingListMatch } from '../WorldCupQualificationTypes';
declare class StandingEntity extends WorldCupQualificationEntityBase<Standing> {
    constructor(client: WorldCupQualificationSDK, entopts: any);
    make(this: StandingEntity): StandingEntity;
    list(this: any, reqmatch?: StandingListMatch, ctrl?: Control): Promise<StandingEntity[]>;
}
export { StandingEntity };
