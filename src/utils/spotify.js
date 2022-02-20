const { SPOTIFY_REFRESH_TOKEN } = process.env
const { SPOTIFY_CLIENT_SECRET } = process.env
const { SPOTIFY_CLIENT_ID } = process.env

const NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOP_TRACKS_URL = 'https://api.spotify.com/v1/me/top/tracks'
const TOKEN_URL = `https://accounts.spotify.com/api/token`

const basic = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString('base64')

const getAccessToken = async () => {
    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: SPOTIFY_REFRESH_TOKEN
        })
    })

    return response.json()
}

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken()

    return fetch(NOW_PLAYING_URL, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
}

export const getTopTracks = async () => {
    const { access_token } = await getAccessToken()

    return fetch(TOP_TRACKS_URL, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
}
