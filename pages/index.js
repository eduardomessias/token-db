import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Token database</title>
        <meta name="description" content="Token database" />
        <link rel="icon" href="/images/table.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Token database</h1>
        <p className={styles.description}>Glad you are here!</p>

        <div className={styles.grid}>
          <Link href="/token/request">
            <a className={styles.card}>
              <h2>Request token &rarr;</h2>
              <p>Request a fresh token based on your meta definition and our timeline queue.</p>
            </a>
          </Link>

          <Link href="/token/queue">
            <a className={styles.card}>
              <h2>Read the book &rarr;</h2>
              <p>It is all about transparency. Feel free to see queue of tokens we are maintaing.</p>
            </a>
          </Link>

          <Link href="/token/examples">
            <a className={styles.card}>
              <h2>Docs & Samples &rarr;</h2>
              <p>Explore a few token examples we have.</p>
              <p>Not sure how this works? No problem, run through the docs, they will help you master it.</p>
            </a>
          </Link>
        </div>

        <div className={styles.hero}>
          <Image src="/images/undraw_security_on_re_e491.svg" alt="security on image" width={280} height={240} />
        </div>
      </main>
    </div>
  )
}