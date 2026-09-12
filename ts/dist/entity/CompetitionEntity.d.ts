import { WorldCupQualificationEntityBase } from '../WorldCupQualificationEntityBase';
import type { WorldCupQualificationSDK } from '../WorldCupQualificationSDK';
import type { Control } from '../types';
import type { Competition, CompetitionLoadMatch, CompetitionListMatch } from '../WorldCupQualificationTypes';
declare class CompetitionEntity extends WorldCupQualificationEntityBase<Competition> {
    constructor(client: WorldCupQualificationSDK, entopts: any);
    make(this: CompetitionEntity): CompetitionEntity;
    load(this: any, reqmatch?: CompetitionLoadMatch, ctrl?: Control): Promise<CompetitionEntity>;
    list(this: any, reqmatch?: CompetitionListMatch, ctrl?: Control): Promise<CompetitionEntity[]>;
}
export { CompetitionEntity };
