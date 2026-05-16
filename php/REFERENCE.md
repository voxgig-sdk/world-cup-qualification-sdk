# WorldCupQualification PHP SDK Reference

Complete API reference for the WorldCupQualification PHP SDK.


## WorldCupQualificationSDK

### Constructor

```php
require_once __DIR__ . '/world-cup-qualification_sdk.php';

$client = new WorldCupQualificationSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `WorldCupQualificationSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = WorldCupQualificationSDK::test();
```


### Instance Methods

#### `Competition($data = null)`

Create a new `CompetitionEntity` instance. Pass `null` for no initial data.

#### `Match($data = null)`

Create a new `MatchEntity` instance. Pass `null` for no initial data.

#### `Standing($data = null)`

Create a new `StandingEntity` instance. Pass `null` for no initial data.

#### `Team($data = null)`

Create a new `TeamEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## CompetitionEntity

```php
$competition = $client->Competition();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Competition()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Competition()->load(["id" => "competition_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CompetitionEntity`

Create a new `CompetitionEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MatchEntity

```php
$match = $client->Match();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Match()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MatchEntity`

Create a new `MatchEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## StandingEntity

```php
$standing = $client->Standing();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | ``$STRING`` | No |  |
| `stage` | ``$STRING`` | No |  |
| `table` | ``$ARRAY`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Standing()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): StandingEntity`

Create a new `StandingEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## TeamEntity

```php
$team = $client->Team();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Team()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): TeamEntity`

Create a new `TeamEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new WorldCupQualificationSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

