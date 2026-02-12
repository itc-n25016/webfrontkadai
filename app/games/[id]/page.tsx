export const dynamic = "force-dynamic";

import { client } from "@/libs/microcms";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

type Game = {
  title: string;
  icon: { url: string };
  genre?: string[];
  developer?: string;
  players?: string;
  releaseYear?: number;
  description?: string;
  rating?: number;
  officialUrl?: string;
  comment?: string;
};

export default async function GameDetail({
  params,
}: {
  params: { id: string };
}) {
  let data: Game;

  try {
    data = await client.get({
      endpoint: "games",
      contentId: params.id,
    });
  } catch {
    notFound();
  }

  return (
    <main className={styles.container}>
      {/* タイトル */}
      <h1 className={styles.title}>{data.title}</h1>

      {/* 上部カード */}
      <div className={styles.top}>
        <Image
          src={data.icon.url}
          alt={data.title}
          width={220}
          height={220}
          className={styles.icon}
        />

        <div className={styles.meta}>
          {/* 評価 */}
          {data.rating && (
            <div className={styles.rating}>
              {"★".repeat(Math.round(data.rating))}
              {"☆".repeat(5 - Math.round(data.rating))}
              <span>{data.rating}</span>
            </div>
          )}

          <p>メーカー：{data.developer || "未設定"}</p>
          <p>発売年：{data.releaseYear || "未設定"}</p>
          <p>人数：{data.players || "未設定"}</p>
        </div>
      </div>

      {/* ジャンル */}
      {data.genre && (
        <section className={styles.section}>
          <h2>ジャンル</h2>
          <p>{data.genre}</p>
        </section>
      )}

      {/* 説明 */}
      {data.description && (
        <section className={styles.section}>
          <h2>説明</h2>
          <p>{data.description}</p>
        </section>
      )}

      {data.comment && (
        <section className={styles.section}>
          <h2>推しコメント</h2>
          <p>{data.comment}</p>
        </section>
      )}

      {/* 公式リンク */}
      {data.officialUrl && (
        <a href={data.officialUrl} target="_blank" className={styles.button}>
          公式サイトを見る
        </a>
      )}

      <Link href="/" className={styles.back}>
        ← 戻る
      </Link>
    </main>
  );
}
