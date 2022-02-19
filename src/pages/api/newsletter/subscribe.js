export default async function handler(req, res) {
    const { email } = req.body
    const { NEWSLETTER_API_KEY } = process.env

    if (!email) {
        res.status(400).json({
            error: 'Email is required'
        })
    }

    const existingSubscribers = await fetch(
        `https://www.getrevue.co/api/v2/subscribers`,
        {
            method: 'GET',
            headers: {
                Authorization: `Token ${NEWSLETTER_API_KEY}`,
                'Content-Type': 'application/json'
            }
        }
    )

    const subscribers = await existingSubscribers.json()

    if (subscribers.some((sub) => sub.email === email)) {
        return res.status(201).json({
            error: '',
            message: "You're already subscribed! 😊"
        })
    }

    const result = await fetch(`https://www.getrevue.co/api/v2/subscribers`, {
        method: 'POST',
        headers: {
            Authorization: `Token ${NEWSLETTER_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email
        })
    })

    const { data } = await result.json()

    if (!result.ok) {
        return res.status(500).json({
            error: data.error.email[0]
        })
    }

    return res.status(201).json({
        error: '',
        message: 'Thank you for subscribing! 💜'
    })
}
