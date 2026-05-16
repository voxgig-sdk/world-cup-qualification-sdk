# WorldCupQualification Golang SDK Reference

Complete API reference for the WorldCupQualification Golang SDK.


## WorldCupQualificationSDK

### Constructor

```go
func NewWorldCupQualificationSDK(options map[string]any) *WorldCupQualificationSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TestSDK(testopts, sdkopts map[string]any) *WorldCupQualificationSDK`

Create a test client with mock features active. Both arguments may be `nil`.

```go
client := sdk.TestSDK(nil, nil)
```


### Instance Methods

#### `Competition(data map[string]any) WorldCupQualificationEntity`

Create a new `Competition` entity instance. Pass `nil` for no initial data.

#### `Match(data map[string]any) WorldCupQualificationEntity`

Create a new `Match` entity instance. Pass `nil` for no initial data.

#### `Standing(data map[string]any) WorldCupQualificationEntity`

Create a new `Standing` entity instance. Pass `nil` for no initial data.

#### `Team(data map[string]any) WorldCupQualificationEntity`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CompetitionEntity

```go
competition := client.Competition(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Competition(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Competition(nil).Load(map[string]any{"id": "competition_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CompetitionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MatchEntity

```go
match := client.Match(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Match(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MatchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StandingEntity

```go
standing := client.Standing(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | ``$STRING`` | No |  |
| `stage` | ``$STRING`` | No |  |
| `table` | ``$ARRAY`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Standing(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StandingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TeamEntity

```go
team := client.Team(nil)
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Team(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewWorldCupQualificationSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

