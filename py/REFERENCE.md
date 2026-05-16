# WorldCupQualification Python SDK Reference

Complete API reference for the WorldCupQualification Python SDK.


## WorldCupQualificationSDK

### Constructor

```python
from world-cup-qualification_sdk import WorldCupQualificationSDK

client = WorldCupQualificationSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `WorldCupQualificationSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = WorldCupQualificationSDK.test()
```


### Instance Methods

#### `Competition(data=None)`

Create a new `CompetitionEntity` instance. Pass `None` for no initial data.

#### `Match(data=None)`

Create a new `MatchEntity` instance. Pass `None` for no initial data.

#### `Standing(data=None)`

Create a new `StandingEntity` instance. Pass `None` for no initial data.

#### `Team(data=None)`

Create a new `TeamEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## CompetitionEntity

```python
competition = client.Competition()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Competition().list({})
```

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Competition().load({"id": "competition_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompetitionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MatchEntity

```python
match = client.Match()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Match().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MatchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StandingEntity

```python
standing = client.Standing()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | ``$STRING`` | No |  |
| `stage` | ``$STRING`` | No |  |
| `table` | ``$ARRAY`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Standing().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StandingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamEntity

```python
team = client.Team()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Team().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = WorldCupQualificationSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

