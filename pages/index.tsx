/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import ItemCpn from "../src/components/Items";
import { Item } from "../src/interface/Item";
import { docAPI } from "../src/service/docService";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    (async () => {
      const rs = await docAPI.getAll();

      setList(rs);
    })();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Poly Career Library</title>
          <meta name="description" content="Poly Career Library" />

          <meta itemProp="name" content="Poly Career Library" />
          <meta itemProp="description" content="Thư viện link project" />
          <meta
            itemProp="image"
            content="http://www.pngkit.com/png/detail/186-1867486_pandablindfold-discord-emoji-admiral-bahroo-emotes.png"
          />

          <meta
            property="og:url"
            content="https://hydro-delta-seven.vercel.app"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Poly Career Library" />
          <meta property="og:description" content="Thư viện link project" />
          <meta
            property="og:image"
            content="http://www.pngkit.com/png/detail/186-1867486_pandablindfold-discord-emoji-admiral-bahroo-emotes.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Poly Career Library" />
          <meta name="twitter:description" content="Thư viện link project" />
          <meta
            name="twitter:image"
            content="http://www.pngkit.com/png/detail/186-1867486_pandablindfold-discord-emoji-admiral-bahroo-emotes.png"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          {list.map((e) => (
            <ItemCpn key={e.id} item={e} />
          ))}
          {/* <ItemCpn
            item={{
              id: "1",
              img: "",
              name: "Github Project Frontend",
              url: "https://github.com/tuongnguyen1209/poly-career-front",
            }}
          />
          <ItemCpn
            item={{
              id: "1",
              img: "",
              name: "Test",
              url: "https://docs.google.com/spreadsheets",
            }}
          />
          <ItemCpn
            item={{
              id: "1",
              img: "",
              name: "Figma Desgin",
              url: "https://www.figma.com/file/gx2tfbvNRpvjCKtPiJGDDf/Untitled?node-id=0%3A1",
            }}
          />
          <ItemCpn
            item={{
              id: "1",
              img: "",
              name: "Docs",
              url: "https://docs.google.com/document/d/1ZxwnmNFcCxLohX0-Suhr775-RdUBdBaEU2ZbWo-osoo/edit?usp=sharing",
            }}
          />
          <ItemCpn
            item={{
              id: "1",
              img: "",
              name: "Google Meet",
              url: "https://meet.google.com/vtq-kzsd-efs",
            }}
          /> */}
        </main>
      </div>
    </>
  );
};

export default Home;
