import NextImage from 'next/image'
import { chakra } from '@chakra-ui/react'

const MagicImage = chakra(NextImage, {
    shouldForwardProp: (prop) =>
        [
            'layout',
            'src',
            'alt',
            'placeholder',
            'width',
            'height',
            'priority'
        ].includes(prop)
})

const Image = (props) => <MagicImage {...props} />

export default Image
