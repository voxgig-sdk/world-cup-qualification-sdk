import { Context } from './Context';
declare class WorldCupQualificationError extends Error {
    isWorldCupQualificationError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { WorldCupQualificationError };
