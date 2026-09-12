import { CompetitionEntity } from './entity/CompetitionEntity';
import { MatchEntity } from './entity/MatchEntity';
import { StandingEntity } from './entity/StandingEntity';
import { TeamEntity } from './entity/TeamEntity';
export type * from './WorldCupQualificationTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { WorldCupQualificationEntityBase } from './WorldCupQualificationEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class WorldCupQualificationSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Competition(entopts?: Record<string, any>): CompetitionEntity;
    Match(entopts?: Record<string, any>): MatchEntity;
    Standing(entopts?: Record<string, any>): StandingEntity;
    Team(entopts?: Record<string, any>): TeamEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): WorldCupQualificationSDK;
    tester(testopts?: any, sdkopts?: any): WorldCupQualificationSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof WorldCupQualificationSDK;
export { stdutil, config, BaseFeature, WorldCupQualificationEntityBase, WorldCupQualificationSDK, SDK, };
