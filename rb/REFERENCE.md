# WorldCupQualification Ruby SDK Reference

Complete API reference for the WorldCupQualification Ruby SDK.


## WorldCupQualificationSDK

### Constructor

```ruby
require_relative 'WorldCupQualification_sdk'

client = WorldCupQualificationSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `WorldCupQualificationSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = WorldCupQualificationSDK.test
```


### Instance Methods

#### `Competition(data = nil)`

Create a new `Competition` entity instance. Pass `nil` for no initial data.

#### `Match(data = nil)`

Create a new `Match` entity instance. Pass `nil` for no initial data.

#### `Standing(data = nil)`

Create a new `Standing` entity instance. Pass `nil` for no initial data.

#### `Team(data = nil)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CompetitionEntity

```ruby
competition = client.Competition
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `area` | `Hash` | No |  |
| `code` | `String` | No |  |
| `current_season` | `Hash` | No |  |
| `emblem` | `String` | No |  |
| `id` | `Integer` | No |  |
| `last_updated` | `String` | No |  |
| `name` | `String` | No |  |
| `number_of_available_season` | `Integer` | No |  |
| `plan` | `String` | No |  |
| `type` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Competition.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Competition.load({ "id" => "competition_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CompetitionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MatchEntity

```ruby
match = client.Match
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `away_team` | `Hash` | No |  |
| `group` | `String` | No |  |
| `home_team` | `Hash` | No |  |
| `id` | `Integer` | No |  |
| `matchday` | `Integer` | No |  |
| `referee` | `Array` | No |  |
| `score` | `Hash` | No |  |
| `stage` | `String` | No |  |
| `status` | `String` | No |  |
| `utc_date` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Match.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MatchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StandingEntity

```ruby
standing = client.Standing
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `String` | No |  |
| `stage` | `String` | No |  |
| `table` | `Array` | No |  |
| `type` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Standing.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StandingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamEntity

```ruby
team = client.Team
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `String` | No |  |
| `club_color` | `String` | No |  |
| `crest` | `String` | No |  |
| `founded` | `Integer` | No |  |
| `id` | `Integer` | No |  |
| `last_updated` | `String` | No |  |
| `name` | `String` | No |  |
| `short_name` | `String` | No |  |
| `tla` | `String` | No |  |
| `venue` | `String` | No |  |
| `website` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Team.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = WorldCupQualificationSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

