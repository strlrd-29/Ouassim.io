import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'

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
            content,
            readingTime: readingTime(content).text
        })
    })
    return result.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
}

export const getRecentBlogPosts = async (count) => {
    const posts = getBlogPosts()

    const recentPosts = posts
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .slice(0, count)

    return recentPosts
}
