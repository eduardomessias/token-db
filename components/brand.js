import styles from './brand.module.css'


import Link from 'next/link'
import Image from 'next/image'


const BrandComponent = () => {
    return (
        <Link href="/">
            <a>
                <h1 className={styles.title}>
                    <Image src="/images/backwards.svg" alt="Backwards" width={20} height={20} />
                    {' '}
                    Token database
                </h1>
            </a>
        </Link>
    )
}


export default BrandComponent