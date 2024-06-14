import Link from "next/link"

export default async function Posts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    
    return (
        <ul>
            {data.map((ele: any) => 
                <li key={ele?.id}>
                    <Link href={`posts/${ele.id}`} className="text-teal-500 hover:text-teal-600">{`${ele?.id}_${ele?.title}`}</Link>
                </li>
            )}
        </ul>
    )
}