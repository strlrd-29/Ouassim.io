import {
    VStack,
    Heading,
    LinkBox,
    LinkOverlay,
    AspectRatio,
    Image,
    useColorModeValue,
    Tooltip,
    Text,
    Skeleton
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

const MotionLinkBox = motion(LinkBox)

const BookmarkCard = ({ cover, title, link, tags }) => {
    return (
        <MotionLinkBox
            as="article"
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
        >
            <Tooltip label={title}>
                <VStack
                    alignItems="center"
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    overflow="hidden"
                    bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
                    _hover={{ transform: 'scale(1.05, 1.05)' }}
                    rounded="md"
                    spacing={0}
                    transitionDuration="slow"
                    transitionProperty="transform"
                    transitionTimingFunction="ease-out"
                >
                    <AspectRatio w="full" ratio={16 / 9}>
                        <Image
                            alt={`Thumbnail of ${title}`}
                            fallback={<Skeleton w="full" h="full" />}
                            layout="fill"
                            src={cover}
                        />
                    </AspectRatio>
                    <VStack
                        alignItems="flex-start"
                        flex={1}
                        w="full"
                        p={3}
                        spacing={1}
                    >
                        <LinkOverlay w="full" href={link} isExternal>
                            <Heading isTruncated size="xs">
                                {title}
                            </Heading>
                        </LinkOverlay>
                        <Text
                            color="gray.500"
                            fontSize="xs"
                            textTransform="capitalize"
                            isTruncated
                            w={'100%'}
                        >
                            {tags.join(', ')}
                        </Text>
                    </VStack>
                </VStack>
            </Tooltip>
        </MotionLinkBox>
    )
}

export default BookmarkCard
