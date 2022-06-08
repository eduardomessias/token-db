import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import styles from '../../styles/New.module.css'


export function getStaticProps() {
    const token = {
        id: '0x23jfsllkjnlchbw38r7w9fhw8tr6wr6==',
        timestamp: new Date().toISOString().slice(0, 16),
    }

    return {
        props: {
            token
        }
    }
}


export default function New({ token }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Token database - request token</title>
                <meta name="description" content="Token database - request token" />
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
                <p className={styles.description}>New request</p>
                <div className={styles.grid}>
                    <section className={styles.card}>
                        <form action="/api/token/new" method="post">
                            <label htmlFor="treqid" className={styles.label}>Request ID</label>
                            <input type="text" id="treqid" name="treqid" className={styles.input} value={token.id} readOnly />

                            <label htmlFor="treqts" className={styles.label}>Timestamp</label>
                            <input type="datetime-local" id="treqts" name="treqts" className={styles.input} value={token.timestamp} readOnly />

                            <label htmlFor="tdata" className={styles.label}> Token data</label>
                            <textarea type="text" rows="2" id="tdata" name="tdata" className={styles.textarea} required></textarea>

                            <button type="submit" className={styles.button}>Submit request</button>
                        </form>
                    </section>
                </div>
                <div className={styles.hero}>
                    <Image src="/images/undraw_phone_call_re_hx6a.svg" alt="security on image" width={260} height={220} />
                </div>
            </main >
        </div >
    )
}