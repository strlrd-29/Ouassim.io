import {
    Alert,
    Box,
    chakra,
    Link,
    Kbd,
    useColorModeValue,
    useColorMode
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import NextImage from 'next/image'
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
        bg={useColorModeValue('gray.900', 'gray.100')}
        px={1}
        py={0.5}
        rounded={{ base: 'none', md: 'md' }}
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
            textDecoration={'none'}
        >
            <Box
                {...props}
                d="inline"
                color={useColorModeValue('gray.700', 'white')}
                fontFamily="heading"
                fontSize={['sm', 'md', 'lg', 'xl']}
                fontWeight="bold"
            >
                {props.children}
            </Box>
        </Link>
    )
}

const Image = (props) => {
    return (
        <NextImage
            {...props}
            layout="responsive"
            loading="lazy"
            quality={100}
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
    inlineCode: InlineCode,
    h1: (props) => <LinkedHeading as="h1" apply="mdx.h1" {...props} />,
    h2: (props) => <LinkedHeading as="h2" apply="mdx.h2" {...props} />,
    h3: (props) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
    h4: (props) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
    hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
    strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
    pre: Pre,
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
    p: (props) => <chakra.p apply="mdx.p" {...props} />,
    ul: (props) => (
        <chakra.ul px={{ base: 4, md: 0 }} apply="mdx.ul" {...props} />
    ),
    ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
    li: (props) => <chakra.li pb="4px" {...props} />,
    blockquote: (props) => (
        <Box>
            <Alert
                as="blockquote"
                role="none"
                rounded="4px"
                status="warning"
                variant="left-accent"
                {...props}
                w="unset"
                mx={-4}
            />
        </Box>
    )
}

export default MDXComponents
