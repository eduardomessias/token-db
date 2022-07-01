import styles from './request.module.css'


const token = {
    id: '0x23jfsllkjnlchbw38r7w9fhw8tr6wr6==',
    timestamp: new Date().toISOString().slice(0, 16),
}


const RequestComponent = () => {
    return (
        <form action="/token/request/confirm" method="post">
            <label htmlFor="treqid" className={styles.label}>Request ID</label>
            <input type="text" id="treqid" name="treqid" className={styles.input} value={token.id} readOnly />

            <label htmlFor="treqts" className={styles.label}>Timestamp</label>
            <input type="datetime-local" id="treqts" name="treqts" className={styles.input} value={token.timestamp} readOnly />

            <label htmlFor="tdata" className={styles.label}> Token data</label>
            <textarea type="text" rows="2" id="tdata" name="tdata" className={styles.textarea} required></textarea>

            <button type="submit" className={styles.button}>Submit request</button>
        </form>
    )
}

export default RequestComponent