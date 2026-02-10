import { client } from "@/libs/microcms";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Game } from "@/libs/types";

type Props = { params: { id: string } };

export default async function GameDetail({ params }: Props) {
  const data = await client.get<Game>({
    endpoint: "games",
    contentId: params.id,
  });

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{data.title}</h1>
      <Image
        className={styles.icon}
        src={data.icon.url}
        alt={data.title}
        width={240}
        height={240}
      />
      <p className={styles.info}>ジャンル: {data.genre}</p>
      <p className={styles.info}>
        対応機種:{" "}
        {data.platforms?.length ? data.platforms.join(", ") : "未設定"}
      </p>
      <p className={styles.info}>リリース年: {data.releaseYear || "未設定"}</p>
      <p className={styles.info}>推しコメント: {data.comment || "なし"}</p>
      <Link href="/" className={styles.backLink}>
        ← トップページに戻る
      </Link>
    </main>
  );
}
