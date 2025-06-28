import { GetServerSideProps } from "next";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const post = await res.json();

  return { props: { post } };
};

export default function BlogPost({ post }: { post: Post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
