import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import styles from '../../../styles/Queue.module.css'


import { useState, useMemo } from 'react'


export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/token/queue")
    const json = await res.json()
    const queue = json.queuePage || []

    return {
        props: {
            queue
        }
    }
}


export default function Queue({ queue, err }) {
    // const [filter, setFilter] = useState()
    // const filteredQueue = useMemo(
        
    // )

    return (
        <div className={styles.container}>
            <Head>
                <title>Token database</title>
                <meta name="description" content="Token database" />
                <link rel="icon" href="/images/table.svg" />
            </Head>
            <main className={styles.main}>
                <Link href="/">
                    <a>
                        <h1 className={styles.title}>
                            <Image src="/images/backwards.svg" alt="Backwards" width={20} height={20} />
                            {' '}
                            Token database
                        </h1>
                    </a>
                </Link>
                <p className={styles.description}>Token queue</p>

                <div className={styles.grid}>
                    <section className={styles.card}>
                        {err && <p>Failed to retrieve the queue</p>}
                        {queue.map(token => (
                            <p key={token.id}>{token.id} | {token.timestamp}</p>
                        ))}
                        {queue.length === 0 && <p>Queue is empty</p>}
                        {queue.length > 0 && <p>View older requests...</p>}
                    </section>
                </div>

                <div className={styles.hero}>
                    <Image src="/images/undraw_select_option_re_u4qn.svg" alt="security on image" width={280} height={240} />
                </div>
            </main>
        </div>
    )
}