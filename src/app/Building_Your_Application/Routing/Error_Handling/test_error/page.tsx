export default async function Test_Error () {
    
    const res = await fetch("https://jsonplaceholder.typicode.com/photos") // "https://jsonplaceholder.typicodeeeeeee.com/photos" // برای دریافت اررور
    const data = await res.json()
    
    return (
        <h1 className="text-5xl">data fetched</h1>
    )

}