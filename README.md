# functional-mcp

This is an MCP server that helps with implementations that follow the concepts of functional programming.

## How to run

Run the following command to start the local server.

```bash
deno task local
```

The server will start at `http://localhost:5503`.

## Usage

### claude code

```bash
$ claude mcp add --transport http functional-mcp https://slim-donkey-12-k44gnq0bgacy.deno.dev/mcp
```

## Development

### Development server

```bash
deno task dev
```

### Lint

```bash
deno task lint
```

### Format

```bash
deno task fmt
```

