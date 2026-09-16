

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WorldCupQualificationSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('MatchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WORLD_CUP_QUALIFICATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('WORLD_CUP_QUALIFICATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WorldCupQualificationSDK.test()
    const ent = testsdk.Match()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WORLD_CUP_QUALIFICATION_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'match.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"awayTeam","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"group","req":false,"short":"Group identifier for group stage matches","type":"`$STRING`","index$":1},{"active":true,"name":"homeTeam","req":false,"type":"`$OBJECT`","index$":2},{"active":true,"name":"id","req":false,"short":"Unique match identifier","type":"`$INTEGER`","index$":3},{"active":true,"name":"matchday","req":false,"short":"Matchday number","type":"`$INTEGER`","index$":4},{"active":true,"name":"referees","req":false,"type":"`$ARRAY`","index$":5},{"active":true,"name":"score","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"stage","req":false,"short":"Competition stage (e.g., GROUP_STAGE, KNOCKOUT)","type":"`$STRING`","index$":7},{"active":true,"name":"status","req":false,"short":"Current match status","type":"`$STRING`","index$":8},{"active":true,"format":"date-time","name":"utcDate","req":false,"short":"Match date and time in UTC","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"match","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":2006,"kind":"param","name":"competition_id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"example":"2024-01-01","kind":"query","name":"date_from","orig":"date_from","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"2024-12-31","kind":"query","name":"date_to","orig":"date_to","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":1,"kind":"query","name":"matchday","orig":"matchday","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":2024,"kind":"query","name":"season","orig":"season","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /competitions/{id}/matches","json":"{\"operationId\":\"getCompetitionMatches\",\"parameters\":[{\"description\":\"The unique identifier of the competition\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":2006,\"type\":\"integer\"}},{\"description\":\"Filter matches by season year\",\"in\":\"query\",\"name\":\"season\",\"required\":false,\"schema\":{\"example\":2024,\"type\":\"integer\"}},{\"description\":\"Filter matches by matchday number\",\"in\":\"query\",\"name\":\"matchday\",\"required\":false,\"schema\":{\"example\":1,\"type\":\"integer\"}},{\"description\":\"Filter matches by status\",\"in\":\"query\",\"name\":\"status\",\"required\":false,\"schema\":{\"enum\":[\"SCHEDULED\",\"LIVE\",\"IN_PLAY\",\"PAUSED\",\"FINISHED\",\"POSTPONED\",\"SUSPENDED\",\"CANCELLED\"],\"type\":\"string\"}},{\"description\":\"Filter matches from this date (YYYY-MM-DD)\",\"in\":\"query\",\"name\":\"dateFrom\",\"required\":false,\"schema\":{\"example\":\"2024-01-01\",\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"Filter matches until this date (YYYY-MM-DD)\",\"in\":\"query\",\"name\":\"dateTo\",\"required\":false,\"schema\":{\"example\":\"2024-12-31\",\"format\":\"date\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"competition\":{\"properties\":{\"area\":{\"properties\":{\"code\":{\"description\":\"ISO code or confederation code\",\"example\":\"AFR\",\"type\":\"string\"},\"flag\":{\"description\":\"URL to flag image\",\"example\":\"https://crests.football-data.org/afr.svg\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the area\",\"example\":2001,\"type\":\"integer\"},\"name\":{\"description\":\"Name of the geographical area/confederation\",\"example\":\"Africa\",\"type\":\"string\"}},\"type\":\"object\"},\"code\":{\"description\":\"Short code for the competition\",\"example\":\"QCAF\",\"type\":\"string\"},\"currentSeason\":{\"properties\":{\"currentMatchday\":{\"description\":\"Current matchday number\",\"example\":10,\"nullable\":true,\"type\":\"integer\"},\"endDate\":{\"description\":\"Season end date\",\"example\":\"2025-10-13\",\"format\":\"date\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the season\",\"example\":1609,\"type\":\"integer\"},\"startDate\":{\"description\":\"Season start date\",\"example\":\"2023-11-15\",\"format\":\"date\",\"type\":\"string\"},\"winner\":{\"nullable\":true,\"oneOf\":[{\"properties\":{\"address\":{\"description\":\"Team address\",\"example\":\"Rua da Alfândega, 70 Rio de Janeiro 20070-000\",\"type\":\"string\"},\"clubColors\":{\"description\":\"Team colors\",\"example\":\"Yellow / Blue / Green\",\"type\":\"string\"},\"crest\":{\"description\":\"URL to team crest/logo\",\"example\":\"https://crests.football-data.org/759.png\",\"type\":\"string\"},\"founded\":{\"description\":\"Year the team was founded\",\"example\":1914,\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the team\",\"example\":759,\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"example\":\"2023-06-22T02:16:33Z\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Full name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"shortName\":{\"description\":\"Short name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"tla\":{\"description\":\"Three-letter abbreviation\",\"example\":\"BRA\",\"type\":\"string\"},\"venue\":{\"description\":\"Home venue/stadium\",\"example\":\"Maracanã\",\"type\":\"string\"},\"website\":{\"description\":\"Team website URL\",\"example\":\"http://www.cbf.com.br\",\"type\":\"string\"}},\"type\":\"object\"},{\"type\":\"null\"}]}},\"type\":\"object\"},\"emblem\":{\"description\":\"URL to competition emblem/logo\",\"example\":\"https://crests.football-data.org/wc.png\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the competition\",\"example\":2006,\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"example\":\"2022-03-13T18:51:44Z\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the competition\",\"example\":\"WC Qualification CAF\",\"type\":\"string\"},\"numberOfAvailableSeasons\":{\"description\":\"Number of seasons available in the API\",\"example\":3,\"type\":\"integer\"},\"plan\":{\"description\":\"API access tier required\",\"enum\":[\"TIER_ONE\",\"TIER_TWO\",\"TIER_THREE\",\"TIER_FOUR\"],\"example\":\"TIER_FOUR\",\"type\":\"string\"},\"type\":{\"description\":\"Type of competition\",\"enum\":[\"LEAGUE\",\"CUP\",\"PLAYOFFS\",\"SUPER_CUP\"],\"example\":\"CUP\",\"type\":\"string\"}},\"type\":\"object\"},\"filters\":{\"additionalProperties\":true,\"type\":\"object\"},\"matches\":{\"items\":{\"properties\":{\"awayTeam\":{\"properties\":{\"address\":{\"description\":\"Team address\",\"example\":\"Rua da Alfândega, 70 Rio de Janeiro 20070-000\",\"type\":\"string\"},\"clubColors\":{\"description\":\"Team colors\",\"example\":\"Yellow / Blue / Green\",\"type\":\"string\"},\"crest\":{\"description\":\"URL to team crest/logo\",\"example\":\"https://crests.football-data.org/759.png\",\"type\":\"string\"},\"founded\":{\"description\":\"Year the team was founded\",\"example\":1914,\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the team\",\"example\":759,\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"example\":\"2023-06-22T02:16:33Z\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Full name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"shortName\":{\"description\":\"Short name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"tla\":{\"description\":\"Three-letter abbreviation\",\"example\":\"BRA\",\"type\":\"string\"},\"venue\":{\"description\":\"Home venue/stadium\",\"example\":\"Maracanã\",\"type\":\"string\"},\"website\":{\"description\":\"Team website URL\",\"example\":\"http://www.cbf.com.br\",\"type\":\"string\"}},\"type\":\"object\"},\"group\":{\"description\":\"Group identifier for group stage matches\",\"nullable\":true,\"type\":\"string\"},\"homeTeam\":{\"properties\":{\"address\":{\"description\":\"Team address\",\"example\":\"Rua da Alfândega, 70 Rio de Janeiro 20070-000\",\"type\":\"string\"},\"clubColors\":{\"description\":\"Team colors\",\"example\":\"Yellow / Blue / Green\",\"type\":\"string\"},\"crest\":{\"description\":\"URL to team crest/logo\",\"example\":\"https://crests.football-data.org/759.png\",\"type\":\"string\"},\"founded\":{\"description\":\"Year the team was founded\",\"example\":1914,\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the team\",\"example\":759,\"type\":\"integer\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"example\":\"2023-06-22T02:16:33Z\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Full name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"shortName\":{\"description\":\"Short name of the team\",\"example\":\"Brazil\",\"type\":\"string\"},\"tla\":{\"description\":\"Three-letter abbreviation\",\"example\":\"BRA\",\"type\":\"string\"},\"venue\":{\"description\":\"Home venue/stadium\",\"example\":\"Maracanã\",\"type\":\"string\"},\"website\":{\"description\":\"Team website URL\",\"example\":\"http://www.cbf.com.br\",\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"description\":\"Unique match identifier\",\"type\":\"integer\"},\"matchday\":{\"description\":\"Matchday number\",\"type\":\"integer\"},\"referees\":{\"items\":{\"properties\":{\"id\":{\"type\":\"integer\"},\"name\":{\"type\":\"string\"},\"nationality\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"score\":{\"properties\":{\"duration\":{\"enum\":[\"REGULAR\",\"EXTRA_TIME\",\"PENALTY_SHOOTOUT\"],\"type\":\"string\"},\"fullTime\":{\"properties\":{\"away\":{\"nullable\":true,\"type\":\"integer\"},\"home\":{\"nullable\":true,\"type\":\"integer\"}},\"type\":\"object\"},\"halfTime\":{\"properties\":{\"away\":{\"nullable\":true,\"type\":\"integer\"},\"home\":{\"nullable\":true,\"type\":\"integer\"}},\"type\":\"object\"},\"winner\":{\"enum\":[\"HOME_TEAM\",\"AWAY_TEAM\",\"DRAW\",null],\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"stage\":{\"description\":\"Competition stage (e.g., GROUP_STAGE, KNOCKOUT)\",\"type\":\"string\"},\"status\":{\"description\":\"Current match status\",\"enum\":[\"SCHEDULED\",\"LIVE\",\"IN_PLAY\",\"PAUSED\",\"FINISHED\",\"POSTPONED\",\"SUSPENDED\",\"CANCELLED\"],\"type\":\"string\"},\"utcDate\":{\"description\":\"Match date and time in UTC\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"resultSet\":{\"properties\":{\"count\":{\"type\":\"integer\"},\"first\":{\"format\":\"date\",\"type\":\"string\"},\"last\":{\"format\":\"date\",\"type\":\"string\"},\"played\":{\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with matches list\"},\"403\":{\"description\":\"Forbidden - Invalid or missing API key\"},\"404\":{\"description\":\"Competition not found\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key required for authentication. Get your key from football-data.org\",\"in\":\"header\",\"name\":\"X-Auth-Token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/competitions/{id}/matches","rename":{"param":{"id":"competition_id"}},"segments":[{"lit":"competitions"},{"var":"competition_id"},{"lit":"matches"}],"select":{"exist":["competition_id","date_from","date_to","matchday","season","status"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["competition"]]},"key$":"match","name__orig":"match","Name":"Match","name_":"match","name-":"match","NAME":"MATCH","index$":1}, {"active":true,"entity":"match","key$":"BasicMatchFlow","kind":"basic","name":"BasicMatchFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"competition_id":"competition01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"match_ref01"}}],"index$":0}]}, 'Match')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let match_ref01_data = Object.values(setup.data.existing.match)[0] as any

    // LIST
    const match_ref01_ent = client.Match()
    const match_ref01_match: any = {}
    match_ref01_match['competition_id'] = setup.idmap['competition01']

    const match_ref01_list = (await match_ref01_ent.list(match_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/match/MatchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WorldCupQualificationSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['match01','match02','match03','competition01','competition02','competition03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WORLD_CUP_QUALIFICATION_TEST_MATCH_ENTID': idmap,
    'WORLD_CUP_QUALIFICATION_TEST_LIVE': 'FALSE',
    'WORLD_CUP_QUALIFICATION_TEST_EXPLAIN': 'FALSE',
    'WORLD_CUP_QUALIFICATION_APIKEY': '',
  })

  idmap = env['WORLD_CUP_QUALIFICATION_TEST_MATCH_ENTID']

  const live = 'TRUE' === env.WORLD_CUP_QUALIFICATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WORLD_CUP_QUALIFICATION_TEST_MATCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WorldCupQualificationSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
