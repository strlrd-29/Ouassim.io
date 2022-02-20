import Layout from '@/components/Container'
import TopTracks from '@/components/TopTracks'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'

export default function TopTracksPage() {
    return (
        <Layout
            title="Top Tracks 🎧"
            description="A list of my top listened tracks"
        >
            <VStack as="section" w="full" alignItems="flex-start" spacing={8}>
                <Box>
                    <Heading size="lg" mb={4}>
                        Top Tracks.
                    </Heading>
                    <Text>A list of my top listened tracks 💿.</Text>
                </Box>
                <TopTracks />
            </VStack>
        </Layout>
    )
}
