import { z } from "zod";

export const basicPracticeSchema = z.object({
  language: z.string().describe("Implementation target language"),
  context: z.string().optional().describe(
    "Additional context or specific requirements",
  ),
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
- モナドパターンの適用（Option/Maybe, Either, IO等

---

## 追加プラクティス

| カテゴリ | プラクティス | 着眼点・例 |
|----------|--------------|------------|
| **型システムの活用** | **代数的データ型（ADT）+網羅的パターンマッチ** | *足し合わせ型（和）* と *かけ合わせ型（積）* で状態を列挙し、パターンマッチを **漏れなく** 実装。コンパイル時や静的解析時に抜けを検知できる。 |
| | **型クラス / プロトコル / トレイト** | 型ごとの振る舞いをインターフェースとして定義し、実装を分離。'Functor' / 'Applicative' / 'Monad' などの共通法則を明示できる。 |
| **副作用の分離** | **エフェクトラッパ** | I/O や日時取得などの副作用を **“値”** としてラップし、純粋ロジックと分離。テスト時はダミー実装に差し替えやすい。 |
| **宣言的スタイル** | **ドメイン固有言語（DSL）化** | ビジネスロジックを小さな関数・コンビネータで組み、読みやすいチェーンや内包表記で表現。 |
| **再帰と畳み込み** | **末尾再帰最適化 & fold/unfold** | 大きなコレクションは 'fold' 系で畳み込み、必要に応じて **トランポリン** や **継続渡し** でスタックを保護。 |
| **遅延評価** | **Lazy ストリーム** | 高コスト計算や無限系列を遅延評価し、**メモ化** で再計算を防ぐ。 |
| **エラーハンドリング** | **Result 型 / 検証型** | 例外を投げずに **値** として失敗を表現し、複数バリデーションは *集約型*（Validated など）でまとめる。 |
| **テスト戦略** | **プロパティベーステスト（PBT）** | ランダム生成データで **不変条件や代数法則** を検証。フレームワークは言語ごとに選択（QuickCheck 系など）。 |
| **並行・並列処理** | **非同期合成 + イミュータブルデータ** | Promise/Future・チャネル・Actor などで安全に並列化し、**共有状態はメッセージパッシング** や **STM** で扱う。 |
| **可読性と保守** | **小さな関数 + ジェネリクス** | 単一責務関数を組み合わせ、型パラメータで汎用化。長いパイプラインはローカル関数へ分割し、型注釈を軽いドキュメントとする。 |

---
`;

  const contextualGuidance = context
    ? `\n\n## 追加の要件\n${context}\n\n上記の基本原則を守りながら、この追加要件も満たしてください。`
    : "";

  return baseGuidance + contextualGuidance;
}
