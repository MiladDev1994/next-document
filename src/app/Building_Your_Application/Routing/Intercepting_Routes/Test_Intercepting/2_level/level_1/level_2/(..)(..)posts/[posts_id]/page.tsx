export default async function Post({params: {posts_id}}: any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${posts_id}`)
    const data = await res.json()

    return (
        <div className="text-5xl text-rose-500">{data?.title}</div>
    )
}