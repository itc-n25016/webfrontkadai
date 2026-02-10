import { client } from "@/libs/microcms";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

type Game = {
  id: string;
  title: string;
  icon: { url: string };
  genre: string;
};

export default async function Home() {
  const data = await client.get({ endpoint: "games" });
  const games: Game[] = data.contents;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className="title">好きなゲームの紹介</h1>
      </div>

      <div className={styles.grid}>
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.id}`}
            className={styles.card}
          >
            <Image
              src={game.icon.url}
              alt={game.title}
              width={120}
              height={120}
            />
            <h2>{game.title}</h2>
            <p>ジャンル: {game.genre}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
