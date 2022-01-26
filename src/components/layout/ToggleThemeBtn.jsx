import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react'

import { Sun, Moon } from 'phosphor-react'
import useSound from 'use-sound'

const sound = '/media/sounds/public_media_sounds_switch-on.mp3'

function ToggleThemeBtn() {
	const { colorMode, toggleColorMode } = useColorMode()
	const [play] = useSound(sound)

	return (
		<Tooltip
			label="Toggle Theme"
			fontSize="xs"
			letterSpacing={1}
			placement="top"
			rounded="sm"
		>
			<IconButton
				aria-label="Toggle Theme"
				bgColor={
					colorMode === 'light'
						? 'rgb(245, 245, 245, 1)'
						: 'rgba(13, 16, 19, 1)'
				}
				color={colorMode === 'light' ? 'black' : 'white'}
				outline="none"
				rounded="full"
				transitionDuration="200ms"
				borderWidth="0.3px"
				onClick={() => {
					toggleColorMode()
					play()
				}}
				icon={colorMode === 'light' ? <Moon /> : <Sun />}
				_hover={{
					borderColor: `${
						colorMode === 'light' ? 'black' : 'whiteAlpha.800'
					}`,
					transform: 'rotate(45deg)',
					border: '1px solid',
					borderColor: 'whiteAlpha.800'
				}}
				_focus={{
					outline: 'none'
				}}
				_active={{
					outline: 'none'
				}}
			/>
		</Tooltip>
	)
}

export default ToggleThemeBtn
