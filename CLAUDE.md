# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a functional programming MCP (Model Context Protocol) server built with Deno and Hono. The server provides prompts and guidance for implementing functional programming principles in various languages.

## Architecture

- **Entry Point**: `src/main.ts` - Sets up a Hono web server with MCP integration
- **MCP Server**: `src/mcp/main.ts` - Defines the MCP server with functional programming prompts
- **Transport**: Uses `@hono/mcp` StreamableHTTPTransport for HTTP-based MCP communication
- **Endpoint**: MCP server is exposed at `/mcp` endpoint, with a simple health check at `/`

## Development Commands

### Server Management
```bash
deno task local    # Start server with file watching on port 5503
deno task dev      # Run development server with watching
```

### Code Quality
```bash
deno task lint     # Run linter
deno task lint:fix # Run linter with auto-fix
deno task fmt      # Format code
deno task fmt:check # Check formatting without changes
```

## Key Dependencies

- **Hono**: Web framework for HTTP server
- **@hono/mcp**: MCP transport implementation for Hono
- **@modelcontextprotocol/sdk**: Core MCP SDK
- **zod**: Schema validation for prompt arguments

## MCP Server Structure

The MCP server registers prompts that provide functional programming guidance:

- **Prompt Name**: "basic" 
- **Purpose**: Provides Japanese-language guidance for implementing functional programming principles
- **Arguments**: `language` (string) - target implementation language
- **Principles Covered**:
  - Immutability (不変性)
  - Pure functions (純粋関数)
  - Higher-order functions (高階関数)

## Code Style

- Uses Deno's built-in formatting with 2-space indentation
- Line width: 80 characters
- Semicolons required
- Double quotes for strings
- Spaces (not tabs) for indentation