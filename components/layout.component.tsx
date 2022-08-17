import styles from './layout.module.css'


import Head from 'next/head'

type Props = {
    title: string
    children: any
}

const LayoutComponent = ({ title = "Token database", children }: Props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/images/table.svg" />
            </Head>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}


export default LayoutComponent