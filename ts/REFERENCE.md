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
| `area` | ``$OBJECT`` | No |  |
| `code` | ``$STRING`` | No |  |
| `current_season` | ``$OBJECT`` | No |  |
| `emblem` | ``$STRING`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `last_updated` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `number_of_available_season` | ``$INTEGER`` | No |  |
| `plan` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Competition().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Competition().load({ id: 'competition_id' })
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
| `away_team` | ``$OBJECT`` | No |  |
| `group` | ``$STRING`` | No |  |
| `home_team` | ``$OBJECT`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `matchday` | ``$INTEGER`` | No |  |
| `referee` | ``$ARRAY`` | No |  |
| `score` | ``$OBJECT`` | No |  |
| `stage` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |
| `utc_date` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Match().list()
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
| `group` | ``$STRING`` | No |  |
| `stage` | ``$STRING`` | No |  |
| `table` | ``$ARRAY`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Standing().list()
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
| `address` | ``$STRING`` | No |  |
| `club_color` | ``$STRING`` | No |  |
| `crest` | ``$STRING`` | No |  |
| `founded` | ``$INTEGER`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `last_updated` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `short_name` | ``$STRING`` | No |  |
| `tla` | ``$STRING`` | No |  |
| `venue` | ``$STRING`` | No |  |
| `website` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Team().list()
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

