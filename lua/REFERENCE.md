# WorldCupQualification Lua SDK Reference

Complete API reference for the WorldCupQualification Lua SDK.


## WorldCupQualificationSDK

### Constructor

```lua
local sdk = require("world-cup-qualification_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts, sdkopts)`

Create a test client with mock features active. Both arguments may be `nil`.

```lua
local client = sdk.test(nil, nil)
```


### Instance Methods

#### `Competition(data)`

Create a new `Competition` entity instance. Pass `nil` for no initial data.

#### `Match(data)`

Create a new `Match` entity instance. Pass `nil` for no initial data.

#### `Standing(data)`

Create a new `Standing` entity instance. Pass `nil` for no initial data.

#### `Team(data)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CompetitionEntity

```lua
local competition = client:Competition(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Competition(nil):list(nil, nil)
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Competition(nil):load({ id = "competition_id" }, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompetitionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MatchEntity

```lua
local match = client:Match(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Match(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MatchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StandingEntity

```lua
local standing = client:Standing(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | ``$STRING`` | No |  |
| `stage` | ``$STRING`` | No |  |
| `table` | ``$ARRAY`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Standing(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StandingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamEntity

```lua
local team = client:Team(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Team(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

