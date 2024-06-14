export default async function Post({params: {posts_id}}: any) {
    console.log(`https://jsonplaceholder.typicode.com/posts/${posts_id}`)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${posts_id}`)
    const data = await res.json()

    return (
        <div className="text-5xl">{data?.title}</div>
    )
}