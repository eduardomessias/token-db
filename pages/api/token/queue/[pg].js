export default function handler(req, res) {
    let pageNumber = req.query.pg
    let pageSize = process.env.DEFAULT_PG_SIZE
    let firstPage = pageNumber * pageSize - pageSize
    let lastPage = pageNumber * pageSize
    let queue = []
    while (queue.length <= 1000) {
        let token = { id: queue.length, timestamp: new Date().toISOString().slice(0, 16), data: 'test' + queue.length }
        queue.push(token)
    }
    let queuePage = queue.filter((token, index) => index >= firstPage && index < lastPage)
    res.status(200).json({ queuePage, pageNumber, pageSize })
}