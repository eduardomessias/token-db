import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../../styles/RequestPage.module.css'
import RequestComponent from '../../../components/request'


const RequestPage = () => {
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
                        <RequestComponent />
                    </section>
                </div>
                <div className={styles.hero}>
                    <Image src="/images/undraw_phone_call_re_hx6a.svg" alt="security on image" width={260} height={220} />
                </div>
            </main >
        </div >
    )
}


export default RequestPage