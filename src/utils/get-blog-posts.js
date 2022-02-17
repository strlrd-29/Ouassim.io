import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export const getBlogPosts = () => {
    const result = []
    const postsDirectory = path.join(process.cwd(), './data/blog')
    const filenames = fs.readdirSync(postsDirectory)
    filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename)
        const slug = filename.replace('.mdx', '')
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const {
            data: { title, description, date, bColor },
            content
        } = matter(fileContents)

        result.push({
            slug,
            title,
            description,
            date,
            bColor,
            content
        })
    })
    return result
}
