

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('TeamEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WORLD_CUP_QUALIFICATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('WORLD_CUP_QUALIFICATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WorldCupQualificationSDK.test()
    const ent = testsdk.Team()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WORLD_CUP_QUALIFICATION_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'team.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"address":{"a":true,"h":"Address","n":"address","r":false,"sh":"Team address","t":"`$STRING`","key$":"address","index$":0},"clubColors":{"a":true,"h":"Club Colors","n":"clubColors","r":false,"sh":"Team colors","t":"`$STRING`","key$":"clubColors","index$":1},"crest":{"a":true,"h":"Crest","n":"crest","r":false,"sh":"URL to team crest/logo","t":"`$STRING`","key$":"crest","index$":2},"founded":{"a":true,"h":"Founded","n":"founded","r":false,"sh":"Year the team was founded","t":"`$INTEGER`","key$":"founded","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the team","t":"`$INTEGER`","key$":"id","index$":4},"lastUpdated":{"a":true,"fo":"date-time","h":"Last Updated","n":"lastUpdated","r":false,"sh":"Last update timestamp","t":"`$STRING`","key$":"lastUpdated","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Full name of the team","t":"`$STRING`","key$":"name","index$":6},"shortName":{"a":true,"h":"Short Name","n":"shortName","r":false,"sh":"Short name of the team","t":"`$STRING`","key$":"shortName","index$":7},"tla":{"a":true,"h":"Tla","n":"tla","r":false,"sh":"Three-letter abbreviation","t":"`$STRING`","key$":"tla","index$":8},"venue":{"a":true,"h":"Venue","n":"venue","r":false,"sh":"Home venue/stadium","t":"`$STRING`","key$":"venue","index$":9},"website":{"a":true,"h":"Website","n":"website","r":false,"sh":"Team website URL","t":"`$STRING`","key$":"website","index$":10}},"id":{"field":"id","name":"id"},"name":"team","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /competitions/{id}/teams","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":2006,"k":"param","n":"competition_id","or":"id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":2024,"k":"query","n":"season","or":"season","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/competitions/{id}/teams","q":{"exist":["competition_id","season"]},"r":{"param":{"id":"competition_id"}},"s":[{"lit":"competitions"},{"var":"competition_id"},{"lit":"teams"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.competition"]]},"key$":"team","name__orig":"team","Name":"Team","name_":"team","name-":"team","NAME":"TEAM","index$":3}, {"active":true,"entity":"team","key$":"BasicTeamFlow","kind":"basic","name":"BasicTeamFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"competition_id":"competition01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"team_ref01"}}],"index$":0}]}, 'Team', {"GET /competitions/{id}/teams":{"protocol":"http","operationId":"getCompetitionTeams","responses":{"200":{"description":"Successful response with teams list","content":{"application/json":{"schema":{"type":"object","properties":{"count":{"description":"Number of teams","key$":"count","type":"integer"},"filters":{"additionalProperties":true,"key$":"filters","type":"object"},"competition":{"key$":"competition","properties":{"area":{"properties":{"code":{"description":"ISO code or confederation code","example":"AFR","type":"string"},"flag":{"description":"URL to flag image","example":"https://crests.football-data.org/afr.svg","nullable":true,"type":"string"},"id":{"description":"Unique identifier for the area","example":2001,"type":"integer"},"name":{"description":"Name of the geographical area/confederation","example":"Africa","type":"string"}},"type":"object","x-ref":"#/components/schemas/Area"},"code":{"description":"Short code for the competition","example":"QCAF","type":"string"},"currentSeason":{"properties":{"currentMatchday":{"description":"Current matchday number","example":10,"nullable":true,"type":"integer"},"endDate":{"description":"Season end date","example":"2025-10-13","format":"date","type":"string"},"id":{"description":"Unique identifier for the season","example":1609,"type":"integer"},"startDate":{"description":"Season start date","example":"2023-11-15","format":"date","type":"string"},"winner":{"nullable":true,"oneOf":[{"properties":{"address":{"description":"Team address","example":"Rua da Alfândega, 70 Rio de Janeiro 20070-000","type":"string"},"clubColors":{"description":"Team colors","example":"Yellow / Blue / Green","type":"string"},"crest":{"description":"URL to team crest/logo","example":"https://crests.football-data.org/759.png","type":"string"},"founded":{"description":"Year the team was founded","example":1914,"type":"integer"},"id":{"description":"Unique identifier for the team","example":759,"type":"integer"},"lastUpdated":{"description":"Last update timestamp","example":"2023-06-22T02:16:33Z","format":"date-time","type":"string"},"name":{"description":"Full name of the team","example":"Brazil","type":"string"},"shortName":{"description":"Short name of the team","example":"Brazil","type":"string"},"tla":{"description":"Three-letter abbreviation","example":"BRA","type":"string"},"venue":{"description":"Home venue/stadium","example":"Maracanã","type":"string"},"website":{"description":"Team website URL","example":"http://www.cbf.com.br","type":"string"}},"type":"object","x-ref":"#/components/schemas/Team"},{"type":"null"}]}},"type":"object","x-ref":"#/components/schemas/Season"},"emblem":{"description":"URL to competition emblem/logo","example":"https://crests.football-data.org/wc.png","nullable":true,"type":"string"},"id":{"description":"Unique identifier for the competition","example":2006,"type":"integer"},"lastUpdated":{"description":"Last update timestamp","example":"2022-03-13T18:51:44Z","format":"date-time","type":"string"},"name":{"description":"Name of the competition","example":"WC Qualification CAF","type":"string"},"numberOfAvailableSeasons":{"description":"Number of seasons available in the API","example":3,"type":"integer"},"plan":{"description":"API access tier required","enum":["TIER_ONE","TIER_TWO","TIER_THREE","TIER_FOUR"],"example":"TIER_FOUR","type":"string"},"type":{"description":"Type of competition","enum":["LEAGUE","CUP","PLAYOFFS","SUPER_CUP"],"example":"CUP","type":"string"}},"type":"object","x-ref":"#/components/schemas/Competition"},"season":{"key$":"season","properties":{"currentMatchday":{"description":"Current matchday number","example":10,"nullable":true,"type":"integer"},"endDate":{"description":"Season end date","example":"2025-10-13","format":"date","type":"string"},"id":{"description":"Unique identifier for the season","example":1609,"type":"integer"},"startDate":{"description":"Season start date","example":"2023-11-15","format":"date","type":"string"},"winner":{"nullable":true,"oneOf":[{"properties":{"address":{"description":"Team address","example":"Rua da Alfândega, 70 Rio de Janeiro 20070-000","type":"string"},"clubColors":{"description":"Team colors","example":"Yellow / Blue / Green","type":"string"},"crest":{"description":"URL to team crest/logo","example":"https://crests.football-data.org/759.png","type":"string"},"founded":{"description":"Year the team was founded","example":1914,"type":"integer"},"id":{"description":"Unique identifier for the team","example":759,"type":"integer"},"lastUpdated":{"description":"Last update timestamp","example":"2023-06-22T02:16:33Z","format":"date-time","type":"string"},"name":{"description":"Full name of the team","example":"Brazil","type":"string"},"shortName":{"description":"Short name of the team","example":"Brazil","type":"string"},"tla":{"description":"Three-letter abbreviation","example":"BRA","type":"string"},"venue":{"description":"Home venue/stadium","example":"Maracanã","type":"string"},"website":{"description":"Team website URL","example":"http://www.cbf.com.br","type":"string"}},"type":"object","x-ref":"#/components/schemas/Team"},{"type":"null"}]}},"type":"object","x-ref":"#/components/schemas/Season"},"teams":{"items":{"properties":{"address":{"description":"Team address","example":"Rua da Alfândega, 70 Rio de Janeiro 20070-000","type":"string","key$":"address"},"clubColors":{"description":"Team colors","example":"Yellow / Blue / Green","type":"string","key$":"clubColors"},"crest":{"description":"URL to team crest/logo","example":"https://crests.football-data.org/759.png","type":"string","key$":"crest"},"founded":{"description":"Year the team was founded","example":1914,"type":"integer","key$":"founded"},"id":{"description":"Unique identifier for the team","example":759,"type":"integer","key$":"id"},"lastUpdated":{"description":"Last update timestamp","example":"2023-06-22T02:16:33Z","format":"date-time","type":"string","key$":"lastUpdated"},"name":{"description":"Full name of the team","example":"Brazil","type":"string","key$":"name"},"shortName":{"description":"Short name of the team","example":"Brazil","type":"string","key$":"shortName"},"tla":{"description":"Three-letter abbreviation","example":"BRA","type":"string","key$":"tla"},"venue":{"description":"Home venue/stadium","example":"Maracanã","type":"string","key$":"venue"},"website":{"description":"Team website URL","example":"http://www.cbf.com.br","type":"string","key$":"website"}},"type":"object","x-ref":"#/components/schemas/Team","index$":0},"key$":"teams","type":"array"}},"x-ref":"#/components/schemas/TeamsResponse"}}}},"403":{"description":"Forbidden - Invalid or missing API key"},"404":{"description":"Competition not found"}},"parameters":[{"name":"id","in":"path","description":"The unique identifier of the competition","required":true,"schema":{"type":"integer","example":2006},"index$":0},{"name":"season","in":"query","description":"Filter by season year","required":false,"schema":{"type":"integer","example":2024},"index$":1}],"security":[{"ApiKeyAuth":[]}],"securitySource":"definition","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-Auth-Token","description":"API key required for authentication. Get your key from football-data.org"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let team_ref01_data = Object.values(setup.data.existing.team)[0] as any

    // LIST
    const team_ref01_ent = client.Team()
    const team_ref01_match: any = {}
    team_ref01_match['competition_id'] = setup.idmap['competition01']

    const team_ref01_list = (await team_ref01_ent.list(team_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/team/TeamTestData.json')

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
    ['team01','team02','team03','competition01','competition02','competition03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WORLD_CUP_QUALIFICATION_TEST_TEAM_ENTID': idmap,
    'WORLD_CUP_QUALIFICATION_TEST_LIVE': 'FALSE',
    'WORLD_CUP_QUALIFICATION_TEST_EXPLAIN': 'FALSE',
    'WORLD_CUP_QUALIFICATION_APIKEY': '',
  })

  idmap = env['WORLD_CUP_QUALIFICATION_TEST_TEAM_ENTID']

  const live = 'TRUE' === env.WORLD_CUP_QUALIFICATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WORLD_CUP_QUALIFICATION_TEST_TEAM_ENTID']
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
  
