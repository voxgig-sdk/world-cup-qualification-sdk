# WorldCupQualification SDK

Track FIFA World Cup qualification competitions, matches, standings, and teams across confederations

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About World Cup Qualification

This SDK wraps the [football-data.org](https://www.football-data.org/) v4 API, scoped to FIFA World Cup qualification competitions across confederations. The upstream service is a long-running independent provider of football (soccer) data accessed via `https://api.football-data.org/v4`.

What you get from the API:

- Competition metadata for World Cup qualification tournaments (e.g. `/v4/competitions/{code}`)
- Match fixtures and results for qualifying rounds
- Standings tables for groups and stages
- Team records associated with qualifying competitions

Authentication uses an API token obtained by registering at football-data.org. The free tier is rate-limited; higher request volumes and additional competitions are available on paid plans. Rate-limit specifics and CORS behaviour are not published on the catalogue page — check the official docs at [docs.football-data.org](https://docs.football-data.org/) before deploying.

## Try it

**TypeScript**
```bash
npm install world-cup-qualification
```

**Python**
```bash
pip install world-cup-qualification-sdk
```

**PHP**
```bash
composer require voxgig/world-cup-qualification-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/world-cup-qualification-sdk/go
```

**Ruby**
```bash
gem install world-cup-qualification-sdk
```

**Lua**
```bash
luarocks install world-cup-qualification-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { WorldCupQualificationSDK } from 'world-cup-qualification'

const client = new WorldCupQualificationSDK({})

// List all competitions
const competitions = await client.Competition().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o world-cup-qualification-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "world-cup-qualification": {
      "command": "/abs/path/to/world-cup-qualification-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Competition** | A football competition resource representing a World Cup qualification tournament, typically retrieved via `/v4/competitions/{id}`. | `/competitions` |
| **Match** | An individual qualifying fixture with scheduling and result data, exposed under the competition's match listings. | `/competitions/{id}/matches` |
| **Standing** | A standings table entry for groups or stages within a qualification competition. | `/competitions/{id}/standings` |
| **Team** | A national team participating in a World Cup qualification competition. | `/competitions/{id}/teams` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from worldcupqualification_sdk import WorldCupQualificationSDK

client = WorldCupQualificationSDK({})

# List all competitions
competitions, err = client.Competition(None).list(None, None)

# Load a specific competition
competition, err = client.Competition(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'worldcupqualification_sdk.php';

$client = new WorldCupQualificationSDK([]);

// List all competitions
[$competitions, $err] = $client->Competition(null)->list(null, null);

// Load a specific competition
[$competition, $err] = $client->Competition(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/world-cup-qualification-sdk/go"

client := sdk.NewWorldCupQualificationSDK(map[string]any{})

// List all competitions
competitions, err := client.Competition(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "WorldCupQualification_sdk"

client = WorldCupQualificationSDK.new({})

# List all competitions
competitions, err = client.Competition(nil).list(nil, nil)

# Load a specific competition
competition, err = client.Competition(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("world-cup-qualification_sdk")

local client = sdk.new({})

-- List all competitions
local competitions, err = client:Competition(nil):list(nil, nil)

-- Load a specific competition
local competition, err = client:Competition(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = WorldCupQualificationSDK.test()
const result = await client.Competition().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = WorldCupQualificationSDK.test(None, None)
result, err = client.Competition(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = WorldCupQualificationSDK::test(null, null);
[$result, $err] = $client->Competition(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Competition(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = WorldCupQualificationSDK.test(nil, nil)
result, err = client.Competition(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Competition(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the World Cup Qualification

- Upstream: [https://www.football-data.org/](https://www.football-data.org/)
- API docs: [https://docs.football-data.org/](https://docs.football-data.org/)

- Operated by football-data.org as a RESTful football data API.
- Free tier requires registration for an API key; paid tiers exist for higher quotas and commercial use.
- License and attribution requirements are not stated on the public catalogue page; consult football-data.org terms before redistributing.

---

Generated from the World Cup Qualification OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
