import { techStack } from '@/utils/constants'
import { Box, Tooltip } from '@chakra-ui/react'
import Image from 'next/image'
import { AddressBook, ArrowUp } from 'phosphor-react'

function InfiniteCarousel() {
    return (
        <Box overflow="hidden" whiteSpace="nowrap" w="container.sm">
            <Box
                overflow="hidden"
                whiteSpace="nowrap"
                display="inline-block"
                animation="slide 60s linear infinite"
            >
                <Box display="inline-block">
                    <Box whiteSpace="nowrap" overflow="hidden">
                        {techStack.map((tech, index) => (
                            <Tooltip key={index} label={tech.name}>
                                <Box
                                    display="inline-block"
                                    px="2.2rem"
                                    verticalAlign="middle"
                                    opacity="0.5"
                                    transition="opacity 0.2s ease"
                                    _hover={{ opacity: '1' }}
                                >
                                    <Image
                                        src={tech.path}
                                        alt={tech.name}
                                        height="50px"
                                        width="50px"
                                        objectFit="contain"
                                        priority
                                    />
                                </Box>
                            </Tooltip>
                        ))}
                    </Box>
                </Box>
                <Box display="inline-block">
                    <Box whiteSpace="nowrap" overflow="hidden">
                        {techStack.map((tech, index) => (
                            <Box
                                key={index}
                                display="inline-block"
                                px="2.2rem"
                                verticalAlign="middle"
                                opacity="0.5"
                                transition="opacity 0.2s ease"
                                _hover={{ opacity: '1' }}
                            >
                                <Image
                                    src={tech.path}
                                    alt={tech.name}
                                    height="50px"
                                    width="50px"
                                    objectFit="contain"
                                    priority
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default InfiniteCarousel
