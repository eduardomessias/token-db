import styles from './page.module.css'


import Head from 'next/head'


const PageComponent = ({ title = "Token database", children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/images/table.svg" />
            </Head>
            <main className={styles.main}>
                {children}
            </main >
        </div >
    )
}


export default PageComponent