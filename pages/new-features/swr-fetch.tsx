'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function SwrFetch() {
    const {data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/todos/3', fetcher)

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Failed to load: {error.message}</p>

    return (
        <div>
            <h1>SWR Fetch</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}