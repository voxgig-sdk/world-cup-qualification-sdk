"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CompetitionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when WORLD_CUP_QUALIFICATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('WORLD_CUP_QUALIFICATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.WorldCupQualificationSDK.test();
        const ent = testsdk.Competition();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.WORLD_CUP_QUALIFICATION_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'competition.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "area": { "a": true, "h": "Area", "n": "area", "r": false, "t": "`$OBJECT`", "key$": "area", "index$": 0 }, "code": { "a": true, "h": "Code", "n": "code", "r": false, "sh": "Short code for the competition", "t": "`$STRING`", "key$": "code", "index$": 1 }, "currentSeason": { "a": true, "h": "Current Season", "n": "currentSeason", "r": false, "t": "`$OBJECT`", "key$": "currentSeason", "index$": 2 }, "emblem": { "a": true, "h": "Emblem", "n": "emblem", "r": false, "sh": "URL to competition emblem/logo", "t": "`$STRING`", "key$": "emblem", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the competition", "t": "`$INTEGER`", "key$": "id", "index$": 4 }, "lastUpdated": { "a": true, "fo": "date-time", "h": "Last Updated", "n": "lastUpdated", "r": false, "sh": "Last update timestamp", "t": "`$STRING`", "key$": "lastUpdated", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the competition", "t": "`$STRING`", "key$": "name", "index$": 6 }, "numberOfAvailableSeasons": { "a": true, "h": "Number Of Available Seasons", "n": "numberOfAvailableSeasons", "r": false, "sh": "Number of seasons available in the API", "t": "`$INTEGER`", "key$": "numberOfAvailableSeasons", "index$": 7 }, "plan": { "a": true, "h": "Plan", "n": "plan", "r": false, "sh": "API access tier required", "t": "`$STRING`", "key$": "plan", "index$": 8 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Type of competition", "t": "`$STRING`", "key$": "type", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "competition", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /competitions", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "AFR,UEFA", "k": "query", "n": "area", "or": "area", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "plan", "or": "plan", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/competitions", "q": { "exist": ["area", "plan"] }, "r": {}, "s": [{ "lit": "competitions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /competitions/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": 2006, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/competitions/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "competitions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "competition", "name__orig": "competition", "Name": "Competition", "name_": "competition", "name-": "competition", "NAME": "COMPETITION", "index$": 0 }, { "active": true, "entity": "competition", "key$": "BasicCompetitionFlow", "kind": "basic", "name": "BasicCompetitionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "competition_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "competition_ref01", "srcdatavar": "competition_ref01_data", "suffix": "_dt0" }, "m": { "id": "competition01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-competition_ref01" } }], "index$": 1 }] }, 'Competition', { "GET /competitions": { "protocol": "http", "operationId": "getCompetitions", "responses": { "200": { "description": "Successful response with list of competitions", "content": { "application/json": { "schema": { "type": "object", "properties": { "count": { "description": "Total number of competitions", "example": 183, "key$": "count", "type": "integer" }, "filters": { "additionalProperties": true, "description": "Applied filters", "key$": "filters", "type": "object" }, "competitions": { "items": { "properties": { "area": { "properties": { "code": { "description": "ISO code or confederation code", "example": "AFR", "type": "string" }, "flag": { "description": "URL to flag image", "example": "https://crests.football-data.org/afr.svg", "nullable": true, "type": "string" }, "id": { "description": "Unique identifier for the area", "example": 2001, "type": "integer" }, "name": { "description": "Name of the geographical area/confederation", "example": "Africa", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Area", "key$": "area" }, "code": { "description": "Short code for the competition", "example": "QCAF", "type": "string", "key$": "code" }, "currentSeason": { "properties": { "currentMatchday": { "description": "Current matchday number", "example": 10, "nullable": true, "type": "integer" }, "endDate": { "description": "Season end date", "example": "2025-10-13", "format": "date", "type": "string" }, "id": { "description": "Unique identifier for the season", "example": 1609, "type": "integer" }, "startDate": { "description": "Season start date", "example": "2023-11-15", "format": "date", "type": "string" }, "winner": { "nullable": true, "oneOf": [{ "properties": { "address": { "description": "Team address", "example": "Rua da Alfândega, 70 Rio de Janeiro 20070-000", "type": "string" }, "clubColors": { "description": "Team colors", "example": "Yellow / Blue / Green", "type": "string" }, "crest": { "description": "URL to team crest/logo", "example": "https://crests.football-data.org/759.png", "type": "string" }, "founded": { "description": "Year the team was founded", "example": 1914, "type": "integer" }, "id": { "description": "Unique identifier for the team", "example": 759, "type": "integer" }, "lastUpdated": { "description": "Last update timestamp", "example": "2023-06-22T02:16:33Z", "format": "date-time", "type": "string" }, "name": { "description": "Full name of the team", "example": "Brazil", "type": "string" }, "shortName": { "description": "Short name of the team", "example": "Brazil", "type": "string" }, "tla": { "description": "Three-letter abbreviation", "example": "BRA", "type": "string" }, "venue": { "description": "Home venue/stadium", "example": "Maracanã", "type": "string" }, "website": { "description": "Team website URL", "example": "http://www.cbf.com.br", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Team" }, { "type": "null" }] } }, "type": "object", "x-ref": "#/components/schemas/Season", "key$": "currentSeason" }, "emblem": { "description": "URL to competition emblem/logo", "example": "https://crests.football-data.org/wc.png", "nullable": true, "type": "string", "key$": "emblem" }, "id": { "description": "Unique identifier for the competition", "example": 2006, "type": "integer", "key$": "id" }, "lastUpdated": { "description": "Last update timestamp", "example": "2022-03-13T18:51:44Z", "format": "date-time", "type": "string", "key$": "lastUpdated" }, "name": { "description": "Name of the competition", "example": "WC Qualification CAF", "type": "string", "key$": "name" }, "numberOfAvailableSeasons": { "description": "Number of seasons available in the API", "example": 3, "type": "integer", "key$": "numberOfAvailableSeasons" }, "plan": { "description": "API access tier required", "enum": ["TIER_ONE", "TIER_TWO", "TIER_THREE", "TIER_FOUR"], "example": "TIER_FOUR", "type": "string", "key$": "plan" }, "type": { "description": "Type of competition", "enum": ["LEAGUE", "CUP", "PLAYOFFS", "SUPER_CUP"], "example": "CUP", "type": "string", "key$": "type" } }, "type": "object", "x-ref": "#/components/schemas/Competition", "index$": 0 }, "key$": "competitions", "type": "array" } }, "x-ref": "#/components/schemas/CompetitionsResponse" }, "example": { "count": 183, "filters": {}, "competitions": [{ "id": 2006, "area": { "id": 2001, "name": "Africa", "code": "AFR", "flag": null }, "name": "WC Qualification CAF", "code": "QCAF", "type": "CUP", "emblem": null, "plan": "TIER_FOUR", "currentSeason": { "id": 1609, "startDate": "2023-11-15", "endDate": "2025-10-13", "currentMatchday": 10, "winner": null }, "numberOfAvailableSeasons": 3, "lastUpdated": "2022-03-13T18:51:44Z" }] } } } }, "400": { "description": "Bad request - Invalid parameters" }, "403": { "description": "Forbidden - Invalid or missing API key" }, "429": { "description": "Too many requests - Rate limit exceeded" } }, "parameters": [{ "name": "areas", "in": "query", "description": "Filter competitions by area/region codes (comma-separated)", "required": false, "schema": { "type": "string", "example": "AFR,UEFA" }, "index$": 0 }, { "name": "plan", "in": "query", "description": "Filter by plan tier (TIER_ONE, TIER_TWO, TIER_THREE, TIER_FOUR)", "required": false, "schema": { "type": "string", "enum": ["TIER_ONE", "TIER_TWO", "TIER_THREE", "TIER_FOUR"] }, "index$": 1 }], "security": [{ "ApiKeyAuth": [] }], "securitySource": "definition", "securitySchemes": { "ApiKeyAuth": { "type": "apiKey", "in": "header", "name": "X-Auth-Token", "description": "API key required for authentication. Get your key from football-data.org" } } }, "GET /competitions/{id}": { "protocol": "http", "operationId": "getCompetitionById", "responses": { "200": { "description": "Successful response with competition details", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "description": "Unique identifier for the competition", "example": 2006, "type": "integer", "key$": "id" }, "area": { "properties": { "code": { "description": "ISO code or confederation code", "example": "AFR", "type": "string" }, "flag": { "description": "URL to flag image", "example": "https://crests.football-data.org/afr.svg", "nullable": true, "type": "string" }, "id": { "description": "Unique identifier for the area", "example": 2001, "type": "integer" }, "name": { "description": "Name of the geographical area/confederation", "example": "Africa", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Area", "key$": "area" }, "name": { "description": "Name of the competition", "example": "WC Qualification CAF", "type": "string", "key$": "name" }, "code": { "description": "Short code for the competition", "example": "QCAF", "type": "string", "key$": "code" }, "type": { "description": "Type of competition", "enum": ["LEAGUE", "CUP", "PLAYOFFS", "SUPER_CUP"], "example": "CUP", "type": "string", "key$": "type" }, "emblem": { "description": "URL to competition emblem/logo", "example": "https://crests.football-data.org/wc.png", "nullable": true, "type": "string", "key$": "emblem" }, "plan": { "description": "API access tier required", "enum": ["TIER_ONE", "TIER_TWO", "TIER_THREE", "TIER_FOUR"], "example": "TIER_FOUR", "type": "string", "key$": "plan" }, "currentSeason": { "properties": { "currentMatchday": { "description": "Current matchday number", "example": 10, "nullable": true, "type": "integer" }, "endDate": { "description": "Season end date", "example": "2025-10-13", "format": "date", "type": "string" }, "id": { "description": "Unique identifier for the season", "example": 1609, "type": "integer" }, "startDate": { "description": "Season start date", "example": "2023-11-15", "format": "date", "type": "string" }, "winner": { "nullable": true, "oneOf": [{ "properties": { "address": { "description": "Team address", "example": "Rua da Alfândega, 70 Rio de Janeiro 20070-000", "type": "string" }, "clubColors": { "description": "Team colors", "example": "Yellow / Blue / Green", "type": "string" }, "crest": { "description": "URL to team crest/logo", "example": "https://crests.football-data.org/759.png", "type": "string" }, "founded": { "description": "Year the team was founded", "example": 1914, "type": "integer" }, "id": { "description": "Unique identifier for the team", "example": 759, "type": "integer" }, "lastUpdated": { "description": "Last update timestamp", "example": "2023-06-22T02:16:33Z", "format": "date-time", "type": "string" }, "name": { "description": "Full name of the team", "example": "Brazil", "type": "string" }, "shortName": { "description": "Short name of the team", "example": "Brazil", "type": "string" }, "tla": { "description": "Three-letter abbreviation", "example": "BRA", "type": "string" }, "venue": { "description": "Home venue/stadium", "example": "Maracanã", "type": "string" }, "website": { "description": "Team website URL", "example": "http://www.cbf.com.br", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/Team" }, { "type": "null" }] } }, "type": "object", "x-ref": "#/components/schemas/Season", "key$": "currentSeason" }, "numberOfAvailableSeasons": { "description": "Number of seasons available in the API", "example": 3, "type": "integer", "key$": "numberOfAvailableSeasons" }, "lastUpdated": { "description": "Last update timestamp", "example": "2022-03-13T18:51:44Z", "format": "date-time", "type": "string", "key$": "lastUpdated" } }, "x-ref": "#/components/schemas/Competition", "index$": 0 } } } }, "403": { "description": "Forbidden - Invalid or missing API key" }, "404": { "description": "Competition not found" } }, "parameters": [{ "name": "id", "in": "path", "description": "The unique identifier of the competition", "required": true, "schema": { "type": "integer", "example": 2006 }, "index$": 0 }], "security": [{ "ApiKeyAuth": [] }], "securitySource": "definition", "securitySchemes": { "ApiKeyAuth": { "type": "apiKey", "in": "header", "name": "X-Auth-Token", "description": "API key required for authentication. Get your key from football-data.org" } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let competition_ref01_data = Object.values(setup.data.existing.competition)[0];
        // LIST
        const competition_ref01_ent = client.Competition();
        const competition_ref01_match = {};
        const competition_ref01_list = (await competition_ref01_ent.list(competition_ref01_match)).map((e) => e.data());
        // LOAD
        const competition_ref01_match_dt0 = {};
        competition_ref01_match_dt0.id = competition_ref01_data.id;
        const competition_ref01_data_dt0 = (await competition_ref01_ent.load(competition_ref01_match_dt0)).data();
        (0, node_assert_1.default)(competition_ref01_data_dt0.id === competition_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/competition/CompetitionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.WorldCupQualificationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['competition01', 'competition02', 'competition03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'WORLD_CUP_QUALIFICATION_TEST_COMPETITION_ENTID': idmap,
        'WORLD_CUP_QUALIFICATION_TEST_LIVE': 'FALSE',
        'WORLD_CUP_QUALIFICATION_TEST_EXPLAIN': 'FALSE',
        'WORLD_CUP_QUALIFICATION_APIKEY': '',
    });
    idmap = env['WORLD_CUP_QUALIFICATION_TEST_COMPETITION_ENTID'];
    const live = 'TRUE' === env.WORLD_CUP_QUALIFICATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['WORLD_CUP_QUALIFICATION_TEST_COMPETITION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.WorldCupQualificationSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.WORLD_CUP_QUALIFICATION_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.WORLD_CUP_QUALIFICATION_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CompetitionEntity.test.js.map