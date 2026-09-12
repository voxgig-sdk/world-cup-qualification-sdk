import { WorldCupQualificationEntityBase } from '../WorldCupQualificationEntityBase';
import type { WorldCupQualificationSDK } from '../WorldCupQualificationSDK';
import type { Control } from '../types';
import type { Match, MatchListMatch } from '../WorldCupQualificationTypes';
declare class MatchEntity extends WorldCupQualificationEntityBase<Match> {
    constructor(client: WorldCupQualificationSDK, entopts: any);
    make(this: MatchEntity): MatchEntity;
    list(this: any, reqmatch?: MatchListMatch, ctrl?: Control): Promise<MatchEntity[]>;
}
export { MatchEntity };
