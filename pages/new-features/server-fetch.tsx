type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function ServerFetch({ data }: {data: Todo}) {
  return (
    <div>
      <h1>Server Fetch (SSR or SSG fallback)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 30, // ISR
  };
}

export default ServerFetch;
