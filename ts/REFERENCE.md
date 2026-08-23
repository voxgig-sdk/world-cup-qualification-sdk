# WorldCupQualification TypeScript SDK Reference

Complete API reference for the WorldCupQualification TypeScript SDK.


## WorldCupQualificationSDK

### Constructor

```ts
new WorldCupQualificationSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `WorldCupQualificationSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = WorldCupQualificationSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `WorldCupQualificationSDK` instance in test mode.


### Instance Methods

#### `Competition(data?: object)`

Create a new `Competition` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CompetitionEntity` instance.

#### `Match(data?: object)`

Create a new `Match` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MatchEntity` instance.

#### `Standing(data?: object)`

Create a new `Standing` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StandingEntity` instance.

#### `Team(data?: object)`

Create a new `Team` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `WorldCupQualificationSDK.test()`.

**Returns:** `WorldCupQualificationSDK` instance in test mode.


---

## CompetitionEntity

```ts
const competition = client.Competition()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `Record<string, any>` | No |  |
| `code` | `string` | No | Short code for the competition |
| `currentSeason` | `Record<string, any>` | No |  |
| `emblem` | `string` | No | URL to competition emblem/logo |
| `id` | `number` | No | Unique identifier for the competition |
| `lastUpdated` | `string` | No | Last update timestamp |
| `name` | `string` | No | Name of the competition |
| `numberOfAvailableSeasons` | `number` | No | Number of seasons available in the API |
| `plan` | `string` | No | API access tier required |
| `type` | `string` | No | Type of competition |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Competition().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Competition().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CompetitionEntity` instance with the same client and
options.

#### `client()`

Return the parent `WorldCupQualificationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MatchEntity

```ts
const match = client.Match()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awayTeam` | `Record<string, any>` | No |  |
| `group` | `string` | No | Group identifier for group stage matches |
| `homeTeam` | `Record<string, any>` | No |  |
| `id` | `number` | No | Unique match identifier |
| `matchday` | `number` | No | Matchday number |
| `referees` | `any[]` | No |  |
| `score` | `Record<string, any>` | No |  |
| `stage` | `string` | No | Competition stage (e.g., GROUP_STAGE, KNOCKOUT) |
| `status` | `string` | No | Current match status |
| `utcDate` | `string` | No | Match date and time in UTC |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Match().list({ competition_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MatchEntity` instance with the same client and
options.

#### `client()`

Return the parent `WorldCupQualificationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StandingEntity

```ts
const standing = client.Standing()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `string` | No | Group identifier |
| `stage` | `string` | No | Competition stage |
| `table` | `any[]` | No |  |
| `type` | `string` | No | Type of standing |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Standing().list({ competition_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StandingEntity` instance with the same client and
options.

#### `client()`

Return the parent `WorldCupQualificationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamEntity

```ts
const team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No | Team address |
| `clubColors` | `string` | No | Team colors |
| `crest` | `string` | No | URL to team crest/logo |
| `founded` | `number` | No | Year the team was founded |
| `id` | `number` | No | Unique identifier for the team |
| `lastUpdated` | `string` | No | Last update timestamp |
| `name` | `string` | No | Full name of the team |
| `shortName` | `string` | No | Short name of the team |
| `tla` | `string` | No | Three-letter abbreviation |
| `venue` | `string` | No | Home venue/stadium |
| `website` | `string` | No | Team website URL |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Team().list({ competition_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `WorldCupQualificationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new WorldCupQualificationSDK({
  feature: {
    test: { active: true },
  }
})
```

