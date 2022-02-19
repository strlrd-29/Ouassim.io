import Contact from '@/components/Contact'
import Layout from '@/components/Container'
import InfiniteCarousel from '@/components/InfiniteCarousel'
import SectionHeader from '@/components/SectionHeader'
import { chakra, Heading, Link, Text, VStack } from '@chakra-ui/react'

export default function About() {
    return (
        <Layout title="About - Ouassim Ghribi">
            <VStack as="section" w="full" alignItems="flex-start" spacing={4}>
                <Heading size="lg">About.</Heading>
                <VStack p={{ base: 0, md: 2 }} alignItems="flex-start">
                    <SectionHeader mb={2}>Ouassim Ghribi</SectionHeader>
                    <Text fontSize="md">
                        Ouassim is a{' '}
                        <chakra.span color="#14b8a6">web developer</chakra.span>{' '}
                        based in Algiers, Algeria. He is passionate about{' '}
                        <chakra.span color="#14b8a6">
                            web development
                        </chakra.span>{' '}
                        and enjoys learning new technologies. He is currently
                        studying{' '}
                        <chakra.span color="#14b8a6">Data Science</chakra.span>{' '}
                        at the National Polytechnic School of Algeirs. He is
                        also a{' '}
                        <chakra.span color="#14b8a6">
                            Self-taught Developer
                        </chakra.span>{' '}
                        . He builds simple solutions that add value to the
                        world. Some stuff that makes Him excited are CSS,{' '}
                        <chakra.span color="#14b8a6">React</chakra.span>, Design
                        Systems, Component Kits, UI Animation and delightful
                        interfaces ✨. Apart from his work, Ouassim likes
                        reading, writing and minimalism in his life.
                    </Text>
                    <Text>
                        This website is always a work in progress - feel free to
                        check it out on{' '}
                        <Link
                            _hover={{ color: '#14b8a6' }}
                            href="https://github.com/strlrd-29/ouassim.io"
                            textDecoration={'underline'}
                            target="_blank"
                        >
                            Github.
                        </Link>
                    </Text>
                </VStack>
                <VStack p={{ base: 0, md: 2 }} alignItems="flex-start">
                    <SectionHeader mb={4}>My Tech Stack</SectionHeader>
                    <InfiniteCarousel />
                </VStack>
                {/* <VStack p={{ base: 0, md: 2 }} alignItems="flex-start">
                    <SectionHeader mb={4}>News Letter</SectionHeader>
                    <NewsLetterForm />
                </VStack> */}
                <VStack p={{ base: 0, md: 2 }} alignItems="flex-start">
                    <SectionHeader mb={4}>Contact</SectionHeader>
                    <Contact />
                </VStack>
            </VStack>
        </Layout>
    )
}
