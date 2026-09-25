"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldCupQualificationError = void 0;
class WorldCupQualificationError extends Error {
    isWorldCupQualificationError = true;
    sdk = 'WorldCupQualification';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.WorldCupQualificationError = WorldCupQualificationError;
//# sourceMappingURL=WorldCupQualificationError.js.map