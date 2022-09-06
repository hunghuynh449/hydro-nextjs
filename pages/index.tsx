/* eslint-disable @next/next/no-sync-scripts */
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
          <h3 className={"flex-box title"}>
            <span className="tiktok flex-box box-logo mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4rem"
                height="4rem"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/tuongnguyen1209/poly-career-front"
              >
                Github Project Frontend
              </a>
            </span>
          </h3>
          <h3 className={"flex-box title"}>
            <span className="flex-box box-logo mr-2">
              <svg
                width="38"
                height="57"
                viewBox="0 0 38 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_137)">
                  <path
                    d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z"
                    fill="#1ABCFE"
                  />
                  <path
                    d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5H0Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0L19 0Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5H0Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5H0Z"
                    fill="#A259FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_137">
                    <rect width="38" height="57" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.figma.com/file/gx2tfbvNRpvjCKtPiJGDDf/Untitled?node-id=0%3A1"
              >
                Figma Desgin
              </a>
            </span>
          </h3>
          <h3 className={"flex-box title"}>
            <span className="flex-box box-logo mr-2">
              <svg
                width="50"
                height="60"
                viewBox="0 0 128 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3333 5.33334C24.9151 5.33334 21.3333 8.91506 21.3333 13.3333V114.667C21.3333 119.085 24.9151 122.667 29.3333 122.667H98.6667C103.085 122.667 106.667 119.085 106.667 114.667V37.3333L74.6667 5.33334H29.3333Z"
                  fill="#4E8DF5"
                />
                <path
                  d="M29.3333 122.667C24.9151 122.667 21.3333 119.085 21.3333 114.667V113.333C21.3333 117.752 24.9151 121.333 29.3333 121.333H98.6667C103.085 121.333 106.667 117.752 106.667 113.333V114.667C106.667 119.085 103.085 122.667 98.6667 122.667H29.3333Z"
                  fill="#417EE9"
                />
                <path
                  d="M29.3333 5.33334C24.9151 5.33334 21.3333 8.91506 21.3333 13.3333V14.6667C21.3333 10.2484 24.9151 6.66667 29.3333 6.66667H76L74.6667 5.33334H29.3333Z"
                  fill="#639AF6"
                />
                <path
                  d="M106.667 64.6667V37.3333L102 32.6667H79.4951C77.7133 32.6667 76.821 34.821 78.0809 36.0809L106.667 64.6667Z"
                  fill="url(#paint0_linear_3_200)"
                />
                <path
                  d="M74.6667 5.33334L106.667 37.3333H82.6667C78.2484 37.3333 74.6667 33.7516 74.6667 29.3333V5.33334Z"
                  fill="#A6C5FA"
                />
                <path
                  d="M85.3333 64H42.6667V69.3333H85.3333V64Z"
                  fill="white"
                />
                <path
                  d="M85.3333 74.6667H42.6667V80H85.3333V74.6667Z"
                  fill="white"
                />
                <path
                  d="M42.6667 85.3333H85.3333V90.6667H42.6667V85.3333Z"
                  fill="white"
                />
                <path
                  d="M74.6667 96H42.6667V101.333H74.6667V96Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3_200"
                    x1="90.6667"
                    y1="64.6667"
                    x2="90.6667"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4E8DF5" />
                    <stop offset="1" stopColor="#3D6ACD" />
                  </linearGradient>
                </defs>
              </svg>
            </span>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1ZxwnmNFcCxLohX0-Suhr775-RdUBdBaEU2ZbWo-osoo/edit?usp=sharing"
              >
                Docs
              </a>
            </span>
          </h3>
          <h3 className={"flex-box title"}>
            <span className="flex-box box-logo mr-2">
              <svg
                width="60"
                height="50"
                viewBox="0 0 256 211"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_62_697)">
                  <path
                    d="M144.822 105.322L169.779 133.849L203.341 155.294L209.179 105.502L203.341 56.833L169.136 75.672L144.822 105.322Z"
                    fill="#00832D"
                  />
                  <path
                    d="M0 150.66V193.09C0 202.778 7.864 210.644 17.554 210.644H59.984L68.77 178.585L59.984 150.66L30.874 141.874L0.001 150.66H0Z"
                    fill="#0066DA"
                  />
                  <path
                    d="M59.984 0L0 59.984L30.876 68.749L59.984 59.984L68.61 32.439L59.984 0Z"
                    fill="#E94235"
                  />
                  <path
                    d="M0 150.68H59.984V59.982H0.001L0 150.68Z"
                    fill="#2684FC"
                  />
                  <path
                    d="M241.659 25.398L203.34 56.834V155.294L241.817 186.852C247.577 191.364 256.003 187.252 256.003 179.93V32.18C256.003 24.777 247.376 20.685 241.658 25.399"
                    fill="#00AC47"
                  />
                  <path
                    d="M144.822 105.322V150.66H59.984V210.644H185.788C195.478 210.644 203.341 202.778 203.341 193.09V155.294L144.822 105.322Z"
                    fill="#00AC47"
                  />
                  <path
                    d="M185.788 0H59.984V59.984H144.822V105.322L203.342 56.832V17.555C203.342 7.865 195.478 0.001 185.788 0.001"
                    fill="#FFBA00"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_62_697">
                    <rect width="256" height="211" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://meet.google.com/vtq-kzsd-efs?authuser=1"
              >
                Google Meet
              </a>
            </span>
          </h3>
        </main>
      </div>
    </>
  );
};

export default Home;
