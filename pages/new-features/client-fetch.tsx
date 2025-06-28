import { useEffect, useState } from "react";

export default function ClientFetch() {
    const [data, setData] = useState(null)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(res => res.json())
        .then(json => setData(json))
    }, [])

    return (
        <div>
            <h1>Client Fetch (useEffect)</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}