import {
    Stack,
    HStack,
    VStack,
    Heading,
    Text,
    LinkBox,
    LinkOverlay,
    AspectRatio,
    Icon,
    useBreakpointValue
} from '@chakra-ui/react'

import { ArrowUpRight } from 'phosphor-react'
import Image from 'next/image'

const ToolCard = ({ image, title, description, link }) => {
    return (
        <LinkBox as="article" role="group">
            <Stack
                alignItems="center"
                justifyContent={{ base: 'center', md: 'flex-start' }}
                direction={{ base: 'column', md: 'row' }}
                w="full"
                p={2}
                spacing={6}
            >
                <AspectRatio w={20} h={20} ratio={1}>
                    <Image
                        alt={`Thumbnail of ${title}`}
                        src={image}
                        layout="fill"
                    />
                </AspectRatio>
                <VStack alignItems="flex-start" flex={1} w="full" spacing={1}>
                    <LinkOverlay href={link} isExternal>
                        <Heading size="md">{title}</Heading>
                    </LinkOverlay>
                    <Text fontSize="sm">{description}</Text>
                </VStack>
                <HStack
                    justifyContent="flex-start"
                    w={12}
                    hidden={useBreakpointValue({ base: true, md: false })}
                >
                    <Icon
                        as={ArrowUpRight}
                        boxSize={6}
                        color="brand.500"
                        opacity={0}
                        _groupHover={{ ml: 4, opacity: 1 }}
                        transitionDuration="slow"
                        transitionProperty="all"
                        transitionTimingFunction="ease-out"
                    />
                </HStack>
            </Stack>
        </LinkBox>
    )
}

export default ToolCard
