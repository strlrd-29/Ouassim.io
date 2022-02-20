const { RAINDROP_REFRESH_TOKEN } = process.env
const { RAINDROP_CLIENT_SECRET } = process.env
const { RAINDROP_CLIENT_ID } = process.env
const TOKEN_URL = 'https://raindrop.io/oauth/access_token'

const PER_PAGE = 50

const getAccessToken = async () => {
    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: RAINDROP_CLIENT_ID,
            client_secret: RAINDROP_CLIENT_SECRET,
            grant_type: 'refresh_token',
            refresh_token: RAINDROP_REFRESH_TOKEN
        })
    })

    return response.json()
}

export const fetchBookmarks = async (page = 0) => {
    const { access_token } = await getAccessToken()
    const bookmarks = []

    const req = await fetch(
        `https://api.raindrop.io/rest/v1/raindrops/${process.env.RAINDROP_COLLECTION}?perpage=${PER_PAGE}&page=${page}`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`
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
