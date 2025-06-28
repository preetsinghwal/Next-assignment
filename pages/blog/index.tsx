import Link from 'next/link'

type Post = {
  id: number
  title: string
}

function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h1>Blog Listing (ISR - updates every 60s)</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()

  return {
    props: {
      posts,
    },
    revalidate: 60, // ISR: re-fetch every 60 seconds
  }
}

export default BlogList
