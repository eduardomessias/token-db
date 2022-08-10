import styles from '../../../styles/RequestPage.module.css'
import PageComponent from '../../../components/page'
import RequestComponent from '../../../components/request'
import BrandComponent from '../../../components/brand'


import Image from 'next/image'

import { createRequest } from '../../../core/factory/request.factory'

export function getStaticProps() {
    const request = JSON.stringify(createRequest())

    return {
        props: {
            request
        }
    }
}


const RequestPage = ({request}) => {  
    return (
        <PageComponent title="Token database - request token">
            <BrandComponent />
            <p className={styles.description}>New request</p>
            <div className={styles.grid}>
                <section className={styles.card}>
                    <RequestComponent template={request} />
                </section>
            </div>
            <div className={styles.hero}>
                <Image src="/images/undraw_phone_call_re_hx6a.svg" alt="security on image" width={260} height={220} />
            </div>
        </PageComponent>
    )
}


export default RequestPage