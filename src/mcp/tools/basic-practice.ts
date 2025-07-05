import { z } from "zod";

export const basicPracticeSchema = z.object({
  language: z.string().describe("Implementation target language"),
  context: z.string().optional().describe("Additional context or specific requirements"),
});

export type BasicPracticeArgs = z.infer<typeof basicPracticeSchema>;

export function basicPractice(args: BasicPracticeArgs): string {
  const { language, context } = args;
  
  const baseGuidance = `
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
- モナドパターンの適用（Option/Maybe, Either, IO等）`;

  const contextualGuidance = context 
    ? `\n\n## 追加の要件\n${context}\n\n上記の基本原則を守りながら、この追加要件も満たしてください。`
    : "";

  return baseGuidance + contextualGuidance;
}