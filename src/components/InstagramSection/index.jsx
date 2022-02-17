import { Box, SimpleGrid, GridItem } from '@chakra-ui/react'

import SectionHeader from '../SectionHeader'
import InstagramCard from './InstagramCard'

export default function InstagramSection({ InstaPosts }) {
    return (
        <Box as="section">
            <SectionHeader>Recent Instagram Posts</SectionHeader>
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={6}
                columnGap={12}
                rowGap={8}
                w="full"
                justifyContent={['center', 'center']}
            >
                {InstaPosts.map((post, index) => (
                    <GridItem key={index} as="article">
                        <InstagramCard {...post} />
                    </GridItem>
                ))}
            </SimpleGrid>
        </Box>
    )
}
