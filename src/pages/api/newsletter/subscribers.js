export default async function handler(req, res) {
    const { NEWSLETTER_API_KEY } = process.env

    const result = await fetch('https://www.getrevue.co/api/v2/subscribers', {
        method: 'GET',
        headers: {
            Authorization: `Token ${NEWSLETTER_API_KEY}`
        }
    })

    const data = await result.json()

    if (!result.ok) {
        return res.status(500).json({
            error: 'Error Retrieving Subscribers'
        })
    }

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
    )

    return res.status(200).json({
        error: '',
        count: data.length
    })
}
