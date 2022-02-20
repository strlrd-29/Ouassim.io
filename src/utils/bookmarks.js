const PER_PAGE = 50

export const fetchBookmarks = async (page = 0) => {
    const bookmarks = []

    const req = await fetch(
        `https://api.raindrop.io/rest/v1/raindrops/${process.env.RAINDROP_COLLECTION}?perpage=${PER_PAGE}&page=${page}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`
            }
        }
    )

    const data = await req.json()

    bookmarks.push(
        ...data.items.map(({ cover, title, link, tags }) => ({
            link,
            title,
            cover,
            tags
        }))
    )

    if (data.items.length === PER_PAGE) {
        bookmarks.push(...(await fetchBookmarks(page + 1)))
    }

    return bookmarks
}
