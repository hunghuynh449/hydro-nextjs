import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Hydro Web</title>
          <meta name="description" content="Web test nextjs của tui" />

          <meta itemProp="name" content="Hydro Web" />
          <meta itemProp="description" content="Web test nextjs của tui" />
          <meta
            itemProp="image"
            content="http://www.pngkit.com/png/detail/186-1867486_pandablindfold-discord-emoji-admiral-bahroo-emotes.png"
          />

          <meta
            property="og:url"
            content="https://hydro-delta-seven.vercel.app"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hydro Web" />
          <meta property="og:description" content="Web test nextjs của tui" />
          <meta
            property="og:image"
            content="http://www.pngkit.com/png/detail/186-1867486_pandablindfold-discord-emoji-admiral-bahroo-emotes.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Hydro Web" />
          <meta name="twitter:description" content="Web test nextjs của tui" />
          <meta
            name="twitter:image"
            content="http://www.pngkit.com/png/detail/186-1867486_pandablindfold-discord-emoji-admiral-bahroo-emotes.png"
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <a href="https://fb.com/hungdarealesttt">Hydro Facebook</a>
          </h1>
        </main>
      </div>
    </>
  );
};

export default Home;
