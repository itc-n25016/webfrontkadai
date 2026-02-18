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
  rating?: string;
  officialUrl?: string;
  screenshots?: { url: string }[];
  appStore?: string;
  googleplay?: string;
  steam?: string;
};

export default async function GameDetail({
  params,
}: {
  params: { id: string };
}) {
  let data: Game;
  let related;

  try {
    data = await client.get<Game>({
      endpoint: "games",
      contentId: params.id,
    });

    related = await client.get({
      endpoint: "games",
      queries: {
        filters: `genre[contains]${data.genre?.[0]}[and]id[not_equals]${params.id}`,
      },
    });
  } catch {
    notFound();
  }

  return (
    <main className={styles.container}>
      {/* タイトル */}
      <h1 className={styles.title}>{data.title}</h1>

      {/* 評価 */}
      {data.rating && <p className={styles.rating}>{data.rating}</p>}

      {/* 上部カード */}
      <div className={styles.top}>
        <Image
          src={data.icon.url}
          alt={data.title}
          width={220}
          height={220}
          className={styles.icon}
        />

        <table className={styles.spec}>
          <tbody>
            <tr>
              <th>メーカー</th>
              <td>{data.developer || "未設定"}</td>
            </tr>
            <tr>
              <th>発売年</th>
              <td>{data.releaseYear || "未設定"}</td>
            </tr>
            <tr>
              <th>人数</th>
              <td>{data.players || "未設定"}</td>
            </tr>
          </tbody>
        </table>
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
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </section>
      )}

      {/* スクショギャラリー */}
      {data.screenshots && data.screenshots.length > 0 && (
        <section className={styles.section}>
          <h2>ゲーム画像</h2>

          <div className={styles.gallery}>
            {data.screenshots.map((img, i) => (
              <Image
                key={i}
                src={img.url}
                alt="screenshot"
                width={500}
                height={300}
                className={styles.screenshot}
              />
            ))}
          </div>
        </section>
      )}

      {/* ストアリンクボタン */}
      <section className={styles.section}>
        <h2>ストア</h2>

        <div className={styles.storeButtons}>
          {data.appStore && (
            <a href={data.appStore} target="_blank">
              App Store
            </a>
          )}
          {data.googleplay && (
            <a href={data.googleplay} target="_blank">
              Google Play
            </a>
          )}
          {data.steam && (
            <a href={data.steam} target="_blank">
              Steam
            </a>
          )}
        </div>
      </section>

      {/* 公式リンク */}
      {data.officialUrl && (
        <a href={data.officialUrl} target="_blank" className={styles.button}>
          公式サイトを見る
        </a>
      )}

      {/* 関連ゲーム表示 */}
      <section className={styles.section}>
        <h2>関連・類似ゲーム</h2>

        <div className={styles.related}>
          {related?.contents?.length > 0 ? (
            related.contents.map((g: any) => (
              <Link key={g.id} href={`/games/${g.id}`}>
                <Image
                  src={g.icon.url}
                  alt={g.title}
                  width={120}
                  height={120}
                />
                <p>{g.title}</p>
              </Link>
            ))
          ) : (
            <p>関連ゲームはありません</p>
          )}
        </div>
      </section>

      <Link href="/" className={styles.back}>
        ← 戻る
      </Link>
    </main>
  );
}
