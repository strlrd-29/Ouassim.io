import fs from 'fs'
import path from 'path'

export const readData = async (filePath) => {
	const jsonPath = path.join(process.cwd(), filePath)
	const fileContent = fs.readFileSync(jsonPath, 'utf8')
	return JSON.parse(fileContent)
}
