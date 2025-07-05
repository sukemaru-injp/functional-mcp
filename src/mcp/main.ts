import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { basicPractice, basicPracticeSchema } from "./tools/basic-practice.ts";

export function createMcpServer() {
  const server = new McpServer({
    name: "functional-mcp",
    version: "0.0.1",
  });

  server.registerPrompt("basic", {
    title: "Basic Prompt",
    description: "A basic prompt for functional programming principles",
    argsSchema: {
      language: z.string().describe("Implementation target language"),
    },
  }, ({ language }) => ({
    messages: [{
      role: "user",
      content: {
        type: "text",
        text: `
あなたは関数型プログラミングの実践者です。
以下の基本原則に則って、${language}で実装してください。
## 基本原則
### 不変性の徹底
  以下の要件でコードを書いてください：
  - すべてのデータ構造は不変（immutable）にする
  - 状態の変更ではなく、新しい値の生成で処理する
  - var/letの使用を最小限に抑え、valまたはconstを優先する
  - 既存のオブジェクトを変更せず、常に新しいインスタンスを返す
### 純粋関数の要求
  以下の制約で関数を実装してください：
  - 副作用を一切持たない純粋関数として設計する
  - 同じ入力に対して必ず同じ出力を返す
  - 外部状態への依存を排除する
  - 引数のみから結果を導出する
### 高階関数の活用
  以下のパターンを積極的に使用してください：
  - map, filter, reduce, flatMapなどの高階関数を中心とした処理
  - カリー化（currying）を活用した部分適用
  - 関数合成（function composition）による処理の組み立て
  - モナドパターンの適用（Option/Maybe, Either, IO等）`,
      },
    }],
  }));

  server.registerTool("basic-practice", {
    description: "Get functional programming guidance for implementation",
    inputSchema: basicPracticeSchema.shape,
  }, ({ language, context }) => {
    const guidance = basicPractice({ language, context });
    return {
      content: [
        {
          type: "text",
          text: guidance,
        },
      ],
    };
  });

  return server;
}
