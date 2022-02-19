import { useState } from 'react'

import { fetchBookmarks } from '@/utils/bookmarks'
import Layout from '@/components/Container'
import {
    Box,
    Button,
    Heading,
    HStack,
    SimpleGrid,
    Text,
    VStack,
    useColorModeValue
} from '@chakra-ui/react'
import BookmarkCard from '@/components/BookmarkCard'

import { motion, AnimatePresence } from 'framer-motion'

const MotionGrid = motion(SimpleGrid)

export default function Bookmarks({ bookmarks, tags }) {
    const [displayBookmarks, setDisplayBookmarks] = useState(bookmarks)
    const [selectedTag, setSelectedTag] = useState(null)

    const filterBookmarks = (tag) => {
        if (tag) {
            setDisplayBookmarks(
                bookmarks.filter(({ tags }) => tags.includes(tag))
            )
        } else {
            setDisplayBookmarks(bookmarks)
        }
        setSelectedTag(tag)
    }
    const cs = useColorModeValue('blue', 'brand')
    return (
        <Layout
            title="Bookmarks 📚 - Ouassim Ghribi"
            description="Bookmarks of Ouassim Ghribi"
        >
            <VStack
                as="section"
                w="full"
                alignItems="flex-start"
                spacing={8}
                overflow="hidden"
            >
                <Box>
                    <Heading size="lg" mb={4}>
                        Bookmarks.
                    </Heading>
                    <Text>
                        A collection of interesting tools / frameworks /
                        websites I use in my daily life. I use them to learn new
                        technologies and to build my own.
                    </Text>
                </Box>
                <HStack
                    as="section"
                    flexWrap="wrap"
                    gridRowGap={2}
                    w="full"
                    spacing={3}
                >
                    <Button
                        textTransform="uppercase"
                        colorScheme={cs}
                        onClick={() => filterBookmarks()}
                        size="sm"
                        variant={!selectedTag ? 'solid' : 'ghost'}
                    >
                        All
                    </Button>
                    {tags.map((tag) => (
                        <Button
                            key={tag}
                            textTransform="uppercase"
                            colorScheme={cs}
                            onClick={() => filterBookmarks(tag)}
                            size="sm"
                            variant={selectedTag === tag ? 'solid' : 'ghost'}
                        >
                            {tag}
                        </Button>
                    ))}
                </HStack>
                <MotionGrid
                    layout
                    as="section"
                    alignItems="stretch"
                    gap={12}
                    w="full"
                    columns={{ base: 1, sm: 2, md: 3 }}
                >
                    <AnimatePresence>
                        {displayBookmarks.map(
                            ({ cover, link, title, tags }) => (
                                <BookmarkCard
                                    key={link}
                                    title={title}
                                    cover={cover}
                                    link={link}
                                    tags={tags}
                                />
                            )
                        )}
                    </AnimatePresence>
                </MotionGrid>
            </VStack>
        </Layout>
    )
}

export async function getStaticProps() {
    const bookmarks = await fetchBookmarks()

    const tags = Array.from(new Set(bookmarks.flatMap(({ tags }) => tags)))

    return {
        props: {
            bookmarks,
            tags
        },
        revalidate: 60 * 60
    }
}
