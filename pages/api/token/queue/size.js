export default async function handler(req, res) {
    let queueSize = 1000


    let pageCount = Math.floor(queueSize / process.env.DEFAULT_PG_SIZE)
    let pageSize = process.env.DEFAULT_PG_SIZE
    let pages = []
    for (let currentPage = 1; currentPage <= pageCount; currentPage++) {
        pages.push((currentPage).toString())
    }
    res.status(200).json({ queueSize, pageCount, pageSize, pages })
}