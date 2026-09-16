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
(0, node_test_1.describe)('StandingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when WORLD_CUP_QUALIFICATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('WORLD_CUP_QUALIFICATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.WorldCupQualificationSDK.test();
        const ent = testsdk.Standing();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.WORLD_CUP_QUALIFICATION_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'standing.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "group", "req": false, "short": "Group identifier", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "stage", "req": false, "short": "Competition stage", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "table", "req": false, "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "type", "req": false, "short": "Type of standing", "type": "`$STRING`", "index$": 3 }], "name": "standing", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": 2006, "kind": "param", "name": "competition_id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }], "query": [{ "active": true, "example": 10, "kind": "query", "name": "matchday", "orig": "matchday", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 2024, "kind": "query", "name": "season", "orig": "season", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /competitions/{id}/standings", "json": "{\"operationId\":\"getCompetitionStandings\",\"parameters\":[{\"description\":\"The unique identifier of the competition\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":2006,\"type\":\"integer\"}},{\"description\":\"Filter by season year\",\"in\":\"query\",\"name\":\"season\",\"required\":false,\"schema\":{\"example\":2024,\"type\":\"integer\"}},{\"description\":\"Get standings after specific matchday\",\"in\":\"query\",\"name\":\"matchday\",\"required\":false,\"schema\":{\"example\":10,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"competition\":{\"properties\":{\"area\":{\"properties\":{\"code\":{\"description\":\"ISO code or confederation code\",\"example\":\"AFR\",\"type\":\"string\"},\"flag\":{\"description\":\"URL to flag image\",\"example\":\"https://crests.football-data.org/afr.svg\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the area\",\"example\":2001,\"type\":\"integer\"},\"name\":{\"description\":\"Name of the geographical area/confederation\",\"example\":\"Africa\",\"type\":\"string\"}},\"type\":\"object\"},\"code\":{\"description\":\"Short code for the competition\",\"example\":\"QCAF\",\"type\":\"string\"},\"currentSeason\":{\"properties\":{\"currentMatchday\":{\"description\":\"Current matchday number\",\"example\":10,\"nullable\":true,\"type\":\"integer\"},\"endDate\":{\"description\":\"Season end date\",\"example\":\"2025-10-13\",\"format\":\"date\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the season\",\"example\":1609,\"type\":\"integer\"},\"startDate\":{\"description\":\"Season start date\",\"example\":\"2023-11-15\",\"format\":\"date\",\"type\":\"string\"},\"winner\":{\"nullable\":true,\"oneOf\":[{\"properties\":{\"address\":{\"description\":\"Team address\",\"example\":\"Rua da Alfândega, 70 Rio de Janeiro 20070-000\",\"type\":\"string\"},\"clubColors\":{\"description\":\"Team colors\",\"example\":\"Yellow / Blue / Green\",\"type\":\"string\"},\"crest\":{\"description\":\"URL to team crest/logo\",\"example\":\"https://crests.football-data.org/759.png\",\"type\":\"string\"},\"founded\":{\"description\":\"Year the team was founded\",\"example\":1914,\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the team\",\"example\":759,\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"example\":\"2023-06-22T02:16:33Z\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Full name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"shortName\":{\"description\":\"Short name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"tla\":{\"description\":\"Three-letter abbreviation\",\"example\":\"BRA\",\"type\":\"string\"},\"venue\":{\"description\":\"Home venue/stadium\",\"example\":\"Maracanã\",\"type\":\"string\"},\"website\":{\"description\":\"Team website URL\",\"example\":\"http://www.cbf.com.br\",\"type\":\"string\"}},\"type\":\"object\"},{\"type\":\"null\"}]}},\"type\":\"object\"},\"emblem\":{\"description\":\"URL to competition emblem/logo\",\"example\":\"https://crests.football-data.org/wc.png\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the competition\",\"example\":2006,\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"example\":\"2022-03-13T18:51:44Z\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the competition\",\"example\":\"WC Qualification CAF\",\"type\":\"string\"},\"numberOfAvailableSeasons\":{\"description\":\"Number of seasons available in the API\",\"example\":3,\"type\":\"integer\"},\"plan\":{\"description\":\"API access tier required\",\"enum\":[\"TIER_ONE\",\"TIER_TWO\",\"TIER_THREE\",\"TIER_FOUR\"],\"example\":\"TIER_FOUR\",\"type\":\"string\"},\"type\":{\"description\":\"Type of competition\",\"enum\":[\"LEAGUE\",\"CUP\",\"PLAYOFFS\",\"SUPER_CUP\"],\"example\":\"CUP\",\"type\":\"string\"}},\"type\":\"object\"},\"filters\":{\"additionalProperties\":true,\"type\":\"object\"},\"season\":{\"properties\":{\"currentMatchday\":{\"description\":\"Current matchday number\",\"example\":10,\"nullable\":true,\"type\":\"integer\"},\"endDate\":{\"description\":\"Season end date\",\"example\":\"2025-10-13\",\"format\":\"date\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the season\",\"example\":1609,\"type\":\"integer\"},\"startDate\":{\"description\":\"Season start date\",\"example\":\"2023-11-15\",\"format\":\"date\",\"type\":\"string\"},\"winner\":{\"nullable\":true,\"oneOf\":[{\"properties\":{\"address\":{\"description\":\"Team address\",\"example\":\"Rua da Alfândega, 70 Rio de Janeiro 20070-000\",\"type\":\"string\"},\"clubColors\":{\"description\":\"Team colors\",\"example\":\"Yellow / Blue / Green\",\"type\":\"string\"},\"crest\":{\"description\":\"URL to team crest/logo\",\"example\":\"https://crests.football-data.org/759.png\",\"type\":\"string\"},\"founded\":{\"description\":\"Year the team was founded\",\"example\":1914,\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the team\",\"example\":759,\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"example\":\"2023-06-22T02:16:33Z\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Full name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"shortName\":{\"description\":\"Short name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"tla\":{\"description\":\"Three-letter abbreviation\",\"example\":\"BRA\",\"type\":\"string\"},\"venue\":{\"description\":\"Home venue/stadium\",\"example\":\"Maracanã\",\"type\":\"string\"},\"website\":{\"description\":\"Team website URL\",\"example\":\"http://www.cbf.com.br\",\"type\":\"string\"}},\"type\":\"object\"},{\"type\":\"null\"}]}},\"type\":\"object\"},\"standings\":{\"items\":{\"properties\":{\"group\":{\"description\":\"Group identifier\",\"nullable\":true,\"type\":\"string\"},\"stage\":{\"description\":\"Competition stage\",\"type\":\"string\"},\"table\":{\"items\":{\"properties\":{\"draw\":{\"description\":\"Games drawn\",\"type\":\"integer\"},\"form\":{\"description\":\"Recent form (e.g., 'W,W,L,D,W')\",\"nullable\":true,\"type\":\"string\"},\"goalDifference\":{\"description\":\"Goal difference\",\"type\":\"integer\"},\"goalsAgainst\":{\"description\":\"Goals conceded\",\"type\":\"integer\"},\"goalsFor\":{\"description\":\"Goals scored\",\"type\":\"integer\"},\"lost\":{\"description\":\"Games lost\",\"type\":\"integer\"},\"playedGames\":{\"description\":\"Number of games played\",\"type\":\"integer\"},\"points\":{\"description\":\"Total points\",\"type\":\"integer\"},\"position\":{\"description\":\"Current position in table\",\"type\":\"integer\"},\"team\":{\"properties\":{\"address\":{\"description\":\"Team address\",\"example\":\"Rua da Alfândega, 70 Rio de Janeiro 20070-000\",\"type\":\"string\"},\"clubColors\":{\"description\":\"Team colors\",\"example\":\"Yellow / Blue / Green\",\"type\":\"string\"},\"crest\":{\"description\":\"URL to team crest/logo\",\"example\":\"https://crests.football-data.org/759.png\",\"type\":\"string\"},\"founded\":{\"description\":\"Year the team was founded\",\"example\":1914,\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the team\",\"example\":759,\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"example\":\"2023-06-22T02:16:33Z\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Full name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"shortName\":{\"description\":\"Short name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"tla\":{\"description\":\"Three-letter abbreviation\",\"example\":\"BRA\",\"type\":\"string\"},\"venue\":{\"description\":\"Home venue/stadium\",\"example\":\"Maracanã\",\"type\":\"string\"},\"website\":{\"description\":\"Team website URL\",\"example\":\"http://www.cbf.com.br\",\"type\":\"string\"}},\"type\":\"object\"},\"won\":{\"description\":\"Games won\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"description\":\"Type of standing\",\"enum\":[\"TOTAL\",\"HOME\",\"AWAY\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with standings\"},\"403\":{\"description\":\"Forbidden - Invalid or missing API key\"},\"404\":{\"description\":\"Competition not found\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key required for authentication. Get your key from football-data.org\",\"in\":\"header\",\"name\":\"X-Auth-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/competitions/{id}/standings", "rename": { "param": { "id": "competition_id" } }, "segments": [{ "lit": "competitions" }, { "var": "competition_id" }, { "lit": "standings" }], "select": { "exist": ["competition_id", "matchday", "season"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["competition"]] }, "key$": "standing", "name__orig": "standing", "Name": "Standing", "name_": "standing", "name-": "standing", "NAME": "STANDING", "index$": 2 }, { "active": true, "entity": "standing", "key$": "BasicStandingFlow", "kind": "basic", "name": "BasicStandingFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "competition_id": "competition01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "standing_ref01" } }], "index$": 0 }] }, 'Standing');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let standing_ref01_data = Object.values(setup.data.existing.standing)[0];
        // LIST
        const standing_ref01_ent = client.Standing();
        const standing_ref01_match = {};
        standing_ref01_match['competition_id'] = setup.idmap['competition01'];
        const standing_ref01_list = (await standing_ref01_ent.list(standing_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/standing/StandingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.WorldCupQualificationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['standing01', 'standing02', 'standing03', 'competition01', 'competition02', 'competition03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'WORLD_CUP_QUALIFICATION_TEST_STANDING_ENTID': idmap,
        'WORLD_CUP_QUALIFICATION_TEST_LIVE': 'FALSE',
        'WORLD_CUP_QUALIFICATION_TEST_EXPLAIN': 'FALSE',
        'WORLD_CUP_QUALIFICATION_APIKEY': '',
    });
    idmap = env['WORLD_CUP_QUALIFICATION_TEST_STANDING_ENTID'];
    const live = 'TRUE' === env.WORLD_CUP_QUALIFICATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['WORLD_CUP_QUALIFICATION_TEST_STANDING_ENTID'];
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
//# sourceMappingURL=StandingEntity.test.js.map