export default async function Post({params: {posts_id}}: any) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${posts_id}`)
    const data = await res.json()

    return (
        <div className="w-full h-full flex items-center justify-center backdrop-blur-sm fixed right-0 top-0 text-5xl text-rose-500">{data?.title}</div>
    )
}