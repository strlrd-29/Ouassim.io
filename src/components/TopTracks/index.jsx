import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import Track from '../Track'

export default function TopTracks() {
    const { data } = useSWR('/api/spotify/top-tracks', fetcher)
    return (
        <>
            {data?.tracks.map((track, idx) => (
                <Track key={track.id} ranking={idx + 1} track={track} />
            ))}
        </>
    )
}
