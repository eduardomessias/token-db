import styles from './request.module.css'

const token = {
    req: {
        id: '0x23jfsllkjnlchbw38r7w9fhw8tr6wr6==',
        timestamp: new Date(),
        content: '',
        effectiveness: {
            type: 'unlimited',
            expires: 'never'
        },
        pushBack: 'https://localhost:3000/token/request/confirm'
    },
    status: 'pending',
    valid: false,
    identity: null
}


const RequestComponent = () => {
    return (
        <form action="/token/request/confirm" method="post">
            <label htmlFor="tokenRequestId" className={styles.label}>Request ID</label>
            <input type="text" id="tokenRequestID" name="tokenRequestID" className={styles.input} value={token.req.id} readOnly />

            <label htmlFor="tokenRequestTimeStamp" className={styles.label}>Timestamp</label>
            <input type="datetime-local" id="tokenRequestTimeStamp" name="tokenRequestTimestamp" className={styles.input} value={token.req.timestamp.toISOString().slice(0, 16)} readOnly />

            <label htmlFor="tokenRequestContent" className={styles.label}> Token data</label>
            <textarea type="text" rows="2" id="tokenRequestContent" name="tokenRequestContent" className={styles.textarea} defaultValue={token.req.content} required></textarea>

            <label htmlFor="tokenRequestEffectivenessType" className={styles.label}>Effectiveness</label>
            <select id="tokenRequestEffectivenessType" name="tokenRequestEffectivenessType" className={styles.select} defaultValue={token.req.effectiveness.type}>
                <option value="unlimited">Unlimited</option>
                <option value="limitedByUsage">Limited by usage</option>
                <option value="limitedByTime">Limited by time</option>
            </select>

            <label id="tokenRequestEffectivenessExpires" htmlFor="tokenRequestEffectivenessExpires" className={styles.label}>Expires</label>
            <input type="text" id="tokenRequestEffectivenessExpires" name="tokenRequestEffectivenessExpires" className={styles.input} defaultValue={token.req.effectiveness.expires} placeholder="Never" readOnly />
            <input type="number" id="tokenRequestEffectivenessExpires" name="tokenRequestEffectivenessExpires" className={styles.input} defaultValue={token.req.effectiveness.expires} placeholder="0" />
            <input type="datetime-local" id="tokenRequestEffectivenessExpires" name="tokenRequestEffectivenessExpires" className={styles.input} defaultValue={token.req.effectiveness.expires} />

            <label htmlFor="tokenRequestPushBack" className={styles.label}>Push back</label>
            <input type="text" id="tokenRequestPushBack" name="tokenRequestPushBack" className={styles.input} defaultValue={token.req.pushBack} />

            <button type="submit" className={styles.button}>Submit request</button>
        </form>
    )
}

export default RequestComponent