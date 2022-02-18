import { promises as fs } from 'fs'
import path from 'path'

export const readBlogPost = async (slug) => {
    const postPath = path.join(process.cwd(), './data/blog', slug + '.mdx')

    return await fs.readFile(postPath, 'utf8')
}
