import {
    Alert,
    Box,
    chakra,
    Link,
    Kbd,
    useColorModeValue,
    useColorMode,
    Flex
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import NextImage from 'next/image'
import { Hash } from 'phosphor-react'
import slugify from 'slugify'

const Pre = (props) => <chakra.div my="2em" borderRadius="sm" {...props} />

const Table = (props) => (
    <chakra.div overflowX="auto">
        <chakra.table textAlign="left" mt="32px" width="full" {...props} />
    </chakra.div>
)

const THead = (props) => (
    <chakra.th
        bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
        fontWeight="semibold"
        p={2}
        fontSize="sm"
        {...props}
    />
)

const TData = (props) => (
    <chakra.td
        p={2}
        borderTopWidth="1px"
        borderColor="inherit"
        fontSize="sm"
        whiteSpace="normal"
        {...props}
    />
)

const InlineCode = (props) => (
    <chakra.code
        apply="mdx.code"
        color={useColorModeValue('gray.100', 'gray.900')}
        bg={useColorModeValue('gray.500', 'gray.200')}
        px={1}
        py={0.5}
        rounded={{ base: 'sm', md: 'md' }}
        {...props}
    />
)

const LinkedHeading = (props) => {
    const slug = slugify(props.children, { lower: true })
    return (
        <Link
            href={`#${slug}`}
            name={slug}
            role="group"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
        >
            <Flex
                alignItems="center"
                {...props}
                d="inline"
                color={useColorModeValue('#333333', '#eaeaea')}
                fontFamily="heading"
                fontSize={{ base: 'lg', md: '3xl' }}
                fontWeight="bold"
                position="relative"
            >
                <Box
                    display="inline"
                    visibility={'hidden'}
                    _groupHover={{ visibility: 'visible' }}
                    // ml={4}
                    position="absolute"
                    left={-8}
                    top={'50%'}
                    transform="translateY(-50%)"
                >
                    <Hash />
                </Box>
                {props.children}
            </Flex>
        </Link>
    )
}

const Image = (props) => {
    return (
        <NextImage
            {...props}
            layout="intrinsic"
            loading="lazy"
            placeholder="blur"
            blurDataURL
            width={640}
            height={640}
        />
    )
}

const Anchor = (props) => {
    const { colorMode } = useColorMode()
    return (
        <chakra.a
            color={mode('purple.500', 'purple.300')({ colorMode })}
            {...props}
        />
    )
}

const MDXComponents = {
    // inlineCode: InlineCode,
    h1: (props) => <LinkedHeading as="h1" apply="mdx.h1" {...props} />,
    h2: (props) => <LinkedHeading as="h2" apply="mdx.h2" {...props} />,
    h3: (props) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
    h4: (props) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
    hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
    strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
    // pre: Pre,
    kbd: Kbd,
    img: Image,
    br: ({ reset, ...props }) => (
        <Box
            as={reset ? 'br' : undefined}
            h={reset ? undefined : '24px'}
            {...props}
        />
    ),
    table: Table,
    th: THead,
    td: TData,
    a: Anchor,
    p: (props) => (
        <chakra.p
            apply="mdx.p"
            {...props}
            fontSize={{ base: 'md', md: 'lg' }}
        />
    ),
    ul: (props) => (
        <chakra.ul px={{ base: 4, md: 0 }} apply="mdx.ul" {...props} />
    ),
    ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
    li: (props) => <chakra.li pb="4px" ml={4} {...props} />,
    blockquote: (props) => (
        <Box>
            <Alert
                as="blockquote"
                role="none"
                rounded="4px"
                status="success"
                variant="left-accent"
                {...props}
                w="unset"
                mx={-4}
            />
        </Box>
    )
}

export default MDXComponents
