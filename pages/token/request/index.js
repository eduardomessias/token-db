import styles from '../../../styles/RequestPage.module.css'
import PageComponent from '../../../components/page'
import RequestComponent from '../../../components/request'
import BrandComponent from '../../../components/brand'

import Image from 'next/image'
import { createRequest } from '../../../core/factory/request.factory'

const RequestPage = ({template, reason}) => {

    if (reason) console.log(reason)
        
    return (
        <PageComponent title="Token database - request token">
            <BrandComponent />
            <p className={styles.description}>New request</p>
            <div className={styles.grid}>
                <section className={styles.card}>
                    <RequestComponent template={template} />
                </section>
            </div>
            <div className={styles.hero}>
                <Image src="/images/undraw_phone_call_re_hx6a.svg" alt="security on image" width={260} height={220} />
            </div>
        </PageComponent>
    )
}


export default RequestPage


export async function getServerSideProps(context) {
    const res = await fetch("http://localhost:3000/api/token/request/new")
    const template = await res.json()

    return {
        props: {
            template: JSON.stringify(createRequest())
        }
    }
}

