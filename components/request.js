import styles from './request.module.css'

const RequestComponent = ({template}) => {
    console.log(template)
    const request = template

    return (
        <form action="/api/token/request/" method="post">
            <label htmlFor="id" className={styles.label}>Request ID</label>
            <input type="text" id="id" name="id" className={styles.input} value={request.id} readOnly />

            <label htmlFor="timestamp" className={styles.label}>Timestamp</label>
            <input type="datetime-local" id="timestamp" name="timestamp" className={styles.input} value={request.timestamp.toISOString().slice(0, 16)} readOnly />

            <label htmlFor="content" className={styles.label}> Token data</label>
            <textarea rows='2' id="content" name="content" className={styles.textarea} defaultValue={request.content} required></textarea>

            <label htmlFor="effectivenessType" className={styles.label}>Effectiveness</label>
            {/* <select id="effectivenessType" name="effectivenessType" className={styles.select}>
                <option value="unlimited">Unlimited</option>
                <option value="limitedByUsage">Limited by usage</option>
                <option value="limitedByTime">Limited by time</option>
            </select> */}
            <select id="effectivenessType" name="effectivenessType" defaultValue="unlimited">
                <option value="unlimited">Unlimited</option>
            </select>

            <label id="effectivenessExpires" htmlFor="effectivenessExpires" className={styles.label}>Expires</label>
            <input type="text" id="effectivenessExpires" name="effectivenessExpires" className={styles.input} defaultValue={request.effectiveness.expires} placeholder="Never" readOnly />
            {/* <input type="number" id="effectivenessExpires" name="effectivenessExpires" className={styles.input} defaultValue={token.req.effectiveness.expires} placeholder="0" />
            <input type="datetime-local" id="effectivenessExpires" name="effectivenessExpires" className={styles.input} defaultValue={token.req.effectiveness.expires} /> */}

            <label htmlFor="pushBack" className={styles.label}>Push back</label>
            <input type="text" id="pushBack" name="pushBack" className={styles.input} defaultValue={request.pushBack} />

            <button type="submit" className={styles.button}>Submit request</button>
        </form>
    )
}


export default RequestComponent