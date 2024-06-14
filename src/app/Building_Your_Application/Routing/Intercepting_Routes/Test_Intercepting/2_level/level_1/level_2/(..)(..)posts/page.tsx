import Link from "next/link"

export default async function Posts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    
    return (
        <ul>
            {data.map((ele: any) => 
                <li key={ele?.id}>
                    <Link href={`posts/${ele.id}`} className="text-yellow-500 hover:text-yellow-600">{`${ele?.id}_${ele?.title}`}</Link>
                </li>
            )}
        </ul>
    )
}