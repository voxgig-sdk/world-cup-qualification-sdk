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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "area", "req": false, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "code", "req": false, "short": "Short code for the competition", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "currentSeason", "req": false, "type": "`$OBJECT`", "index$": 2 }, { "active": true, "name": "emblem", "req": false, "short": "URL to competition emblem/logo", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the competition", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "format": "date-time", "name": "lastUpdated", "req": false, "short": "Last update timestamp", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "name", "req": false, "short": "Name of the competition", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "numberOfAvailableSeasons", "req": false, "short": "Number of seasons available in the API", "type": "`$INTEGER`", "index$": 7 }, { "active": true, "name": "plan", "req": false, "short": "API access tier required", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "type", "req": false, "short": "Type of competition", "type": "`$STRING`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "competition", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "AFR,UEFA", "kind": "query", "name": "area", "orig": "area", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "plan", "orig": "plan", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /competitions", "json": "{\"operationId\":\"getCompetitions\",\"parameters\":[{\"description\":\"Filter competitions by area/region codes (comma-separated)\",\"in\":\"query\",\"name\":\"areas\",\"required\":false,\"schema\":{\"example\":\"AFR,UEFA\",\"type\":\"string\"}},{\"description\":\"Filter by plan tier (TIER_ONE, TIER_TWO, TIER_THREE, TIER_FOUR)\",\"in\":\"query\",\"name\":\"plan\",\"required\":false,\"schema\":{\"enum\":[\"TIER_ONE\",\"TIER_TWO\",\"TIER_THREE\",\"TIER_FOUR\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"competitions\":[{\"area\":{\"code\":\"AFR\",\"flag\":null,\"id\":2001,\"name\":\"Africa\"},\"code\":\"QCAF\",\"currentSeason\":{\"currentMatchday\":10,\"endDate\":\"2025-10-13\",\"id\":1609,\"startDate\":\"2023-11-15\",\"winner\":null},\"emblem\":null,\"id\":2006,\"lastUpdated\":\"2022-03-13T18:51:44Z\",\"name\":\"WC Qualification CAF\",\"numberOfAvailableSeasons\":3,\"plan\":\"TIER_FOUR\",\"type\":\"CUP\"}],\"count\":183,\"filters\":{}},\"schema\":{\"properties\":{\"competitions\":{\"items\":{\"properties\":{\"area\":{\"properties\":{\"code\":{\"description\":\"ISO code or confederation code\",\"example\":\"AFR\",\"type\":\"string\"},\"flag\":{\"description\":\"URL to flag image\",\"example\":\"https://crests.football-data.org/afr.svg\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the area\",\"example\":2001,\"type\":\"integer\"},\"name\":{\"description\":\"Name of the geographical area/confederation\",\"example\":\"Africa\",\"type\":\"string\"}},\"type\":\"object\"},\"code\":{\"description\":\"Short code for the competition\",\"example\":\"QCAF\",\"type\":\"string\"},\"currentSeason\":{\"properties\":{\"currentMatchday\":{\"description\":\"Current matchday number\",\"example\":10,\"nullable\":true,\"type\":\"integer\"},\"endDate\":{\"description\":\"Season end date\",\"example\":\"2025-10-13\",\"format\":\"date\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the season\",\"example\":1609,\"type\":\"integer\"},\"startDate\":{\"description\":\"Season start date\",\"example\":\"2023-11-15\",\"format\":\"date\",\"type\":\"string\"},\"winner\":{\"nullable\":true,\"oneOf\":[{\"properties\":{\"address\":{\"description\":\"Team address\",\"example\":\"Rua da Alfândega, 70 Rio de Janeiro 20070-000\",\"type\":\"string\"},\"clubColors\":{\"description\":\"Team colors\",\"example\":\"Yellow / Blue / Green\",\"type\":\"string\"},\"crest\":{\"description\":\"URL to team crest/logo\",\"example\":\"https://crests.football-data.org/759.png\",\"type\":\"string\"},\"founded\":{\"description\":\"Year the team was founded\",\"example\":1914,\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the team\",\"example\":759,\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"example\":\"2023-06-22T02:16:33Z\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Full name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"shortName\":{\"description\":\"Short name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"tla\":{\"description\":\"Three-letter abbreviation\",\"example\":\"BRA\",\"type\":\"string\"},\"venue\":{\"description\":\"Home venue/stadium\",\"example\":\"Maracanã\",\"type\":\"string\"},\"website\":{\"description\":\"Team website URL\",\"example\":\"http://www.cbf.com.br\",\"type\":\"string\"}},\"type\":\"object\"},{\"type\":\"null\"}]}},\"type\":\"object\"},\"emblem\":{\"description\":\"URL to competition emblem/logo\",\"example\":\"https://crests.football-data.org/wc.png\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the competition\",\"example\":2006,\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"example\":\"2022-03-13T18:51:44Z\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the competition\",\"example\":\"WC Qualification CAF\",\"type\":\"string\"},\"numberOfAvailableSeasons\":{\"description\":\"Number of seasons available in the API\",\"example\":3,\"type\":\"integer\"},\"plan\":{\"description\":\"API access tier required\",\"enum\":[\"TIER_ONE\",\"TIER_TWO\",\"TIER_THREE\",\"TIER_FOUR\"],\"example\":\"TIER_FOUR\",\"type\":\"string\"},\"type\":{\"description\":\"Type of competition\",\"enum\":[\"LEAGUE\",\"CUP\",\"PLAYOFFS\",\"SUPER_CUP\"],\"example\":\"CUP\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"count\":{\"description\":\"Total number of competitions\",\"example\":183,\"type\":\"integer\"},\"filters\":{\"additionalProperties\":true,\"description\":\"Applied filters\",\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of competitions\"},\"400\":{\"description\":\"Bad request - Invalid parameters\"},\"403\":{\"description\":\"Forbidden - Invalid or missing API key\"},\"429\":{\"description\":\"Too many requests - Rate limit exceeded\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key required for authentication. Get your key from football-data.org\",\"in\":\"header\",\"name\":\"X-Auth-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/competitions", "segments": [{ "lit": "competitions" }], "select": { "exist": ["area", "plan"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": 2006, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /competitions/{id}", "json": "{\"operationId\":\"getCompetitionById\",\"parameters\":[{\"description\":\"The unique identifier of the competition\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":2006,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"area\":{\"properties\":{\"code\":{\"description\":\"ISO code or confederation code\",\"example\":\"AFR\",\"type\":\"string\"},\"flag\":{\"description\":\"URL to flag image\",\"example\":\"https://crests.football-data.org/afr.svg\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the area\",\"example\":2001,\"type\":\"integer\"},\"name\":{\"description\":\"Name of the geographical area/confederation\",\"example\":\"Africa\",\"type\":\"string\"}},\"type\":\"object\"},\"code\":{\"description\":\"Short code for the competition\",\"example\":\"QCAF\",\"type\":\"string\"},\"currentSeason\":{\"properties\":{\"currentMatchday\":{\"description\":\"Current matchday number\",\"example\":10,\"nullable\":true,\"type\":\"integer\"},\"endDate\":{\"description\":\"Season end date\",\"example\":\"2025-10-13\",\"format\":\"date\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the season\",\"example\":1609,\"type\":\"integer\"},\"startDate\":{\"description\":\"Season start date\",\"example\":\"2023-11-15\",\"format\":\"date\",\"type\":\"string\"},\"winner\":{\"nullable\":true,\"oneOf\":[{\"properties\":{\"address\":{\"description\":\"Team address\",\"example\":\"Rua da Alfândega, 70 Rio de Janeiro 20070-000\",\"type\":\"string\"},\"clubColors\":{\"description\":\"Team colors\",\"example\":\"Yellow / Blue / Green\",\"type\":\"string\"},\"crest\":{\"description\":\"URL to team crest/logo\",\"example\":\"https://crests.football-data.org/759.png\",\"type\":\"string\"},\"founded\":{\"description\":\"Year the team was founded\",\"example\":1914,\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the team\",\"example\":759,\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"example\":\"2023-06-22T02:16:33Z\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Full name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"shortName\":{\"description\":\"Short name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"tla\":{\"description\":\"Three-letter abbreviation\",\"example\":\"BRA\",\"type\":\"string\"},\"venue\":{\"description\":\"Home venue/stadium\",\"example\":\"Maracanã\",\"type\":\"string\"},\"website\":{\"description\":\"Team website URL\",\"example\":\"http://www.cbf.com.br\",\"type\":\"string\"}},\"type\":\"object\"},{\"type\":\"null\"}]}},\"type\":\"object\"},\"emblem\":{\"description\":\"URL to competition emblem/logo\",\"example\":\"https://crests.football-data.org/wc.png\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the competition\",\"example\":2006,\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"example\":\"2022-03-13T18:51:44Z\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the competition\",\"example\":\"WC Qualification CAF\",\"type\":\"string\"},\"numberOfAvailableSeasons\":{\"description\":\"Number of seasons available in the API\",\"example\":3,\"type\":\"integer\"},\"plan\":{\"description\":\"API access tier required\",\"enum\":[\"TIER_ONE\",\"TIER_TWO\",\"TIER_THREE\",\"TIER_FOUR\"],\"example\":\"TIER_FOUR\",\"type\":\"string\"},\"type\":{\"description\":\"Type of competition\",\"enum\":[\"LEAGUE\",\"CUP\",\"PLAYOFFS\",\"SUPER_CUP\"],\"example\":\"CUP\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with competition details\"},\"403\":{\"description\":\"Forbidden - Invalid or missing API key\"},\"404\":{\"description\":\"Competition not found\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key required for authentication. Get your key from football-data.org\",\"in\":\"header\",\"name\":\"X-Auth-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/competitions/{id}", "segments": [{ "lit": "competitions" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "competition", "name__orig": "competition", "Name": "Competition", "name_": "competition", "name-": "competition", "NAME": "COMPETITION", "index$": 0 }, { "active": true, "entity": "competition", "key$": "BasicCompetitionFlow", "kind": "basic", "name": "BasicCompetitionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "competition_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "competition_ref01", "srcdatavar": "competition_ref01_data", "suffix": "_dt0" }, "match": { "id": "competition01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-competition_ref01" } }], "index$": 1 }] }, 'Competition');
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