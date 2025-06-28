import { Hono } from "hono";
import { StreamableHTTPTransport } from "@hono/mcp";
import { createMcpServer } from "./mcp/main.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello, functional-mcp is available at /mcp");
});

app.all("/mcp", async (c) => {
  const mcpServer = createMcpServer();
  const transport = new StreamableHTTPTransport();

  await mcpServer.connect(transport);
  return transport.handleRequest(c);
});

export default app satisfies Deno.ServeDefaultExport;
