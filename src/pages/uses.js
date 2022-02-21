import Layout from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import ToolCard from '@/components/ToolCard'
import { readData } from '@/utils/read-data'
import {
    Heading,
    HStack,
    Icon,
    LinkBox,
    LinkOverlay,
    List,
    ListItem,
    Text,
    useBreakpointValue,
    useColorModeValue,
    VStack
} from '@chakra-ui/react'
import { ArrowUpRight } from 'phosphor-react'

export default function Uses({ tools, categories, extensions }) {
    return (
        <Layout>
            <VStack as="section" w="full" alignItems="flex-start" spacing={4}>
                <Heading size="lg">Software tools.</Heading>
                <Text fontSize="md">
                    This is a list of software tools I use frequently. I will do
                    my best to keep it up to date with the latest tools I use.
                </Text>
            </VStack>
            <List w="full" spacing={12}>
                {categories.map((category) => (
                    <ListItem
                        key={category}
                        alignItems="flex-start"
                        spacing={8}
                    >
                        <SectionHeader size="md">{category}.</SectionHeader>
                        <List alignItems="stretch" w="full" spacing={2}>
                            {tools[category].map((tool) => (
                                <ListItem
                                    key={tool.link}
                                    rounded="lg"
                                    borderBottom="1px solid rgba(182, 184, 187, 0.4)"
                                >
                                    <ToolCard {...tool} />
                                </ListItem>
                            ))}
                        </List>
                    </ListItem>
                ))}
            </List>
            <List alignItems="stretch" w="full" spacing={12}>
                <Heading size="lg">My most used VSC extensions.</Heading>
                {extensions.map(({ title, description, link }) => (
                    <ListItem key={link}>
                        <LinkBox role="group" as="article">
                            <HStack
                                alignItems="center"
                                justifyContent={{
                                    base: 'center',
                                    md: 'flex-start'
                                }}
                                w="full"
                                p={3}
                                spacing={6}
                            >
                                <VStack
                                    alignItems="flex-start"
                                    flex={1}
                                    w="full"
                                    spacing={1}
                                >
                                    <LinkOverlay href={link} isExternal>
                                        <Heading size="md" mb={1}>
                                            {title}
                                        </Heading>
                                    </LinkOverlay>
                                    <Text fontSize="sm">{description}</Text>
                                </VStack>
                                <HStack justifyContent="flex-start" w={12}>
                                    <Icon
                                        as={ArrowUpRight}
                                        boxSize={6}
                                        color="brand.500"
                                        opacity={0}
                                        _groupHover={{ ml: 6, opacity: 1 }}
                                        transitionDuration="slow"
                                        transitionProperty="all"
                                        transitionTimingFunction="ease-out"
                                    />
                                </HStack>
                            </HStack>
                        </LinkBox>
                    </ListItem>
                ))}
            </List>
        </Layout>
    )
}

export async function getStaticProps() {
    const { tools: toolsData, extensions } = await readData(
        '/data/uses/software-tools.json'
    )

    const tools = {}

    toolsData.forEach((tool) => {
        if (!tools[tool.category]) {
            tools[tool.category] = []
        }
        tools[tool.category] = [...tools[tool.category], tool]
    })

    const categories = Object.keys(tools)

    return {
        props: { tools, categories, extensions }
    }
}
