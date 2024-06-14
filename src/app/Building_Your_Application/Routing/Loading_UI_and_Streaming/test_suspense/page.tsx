import { Suspense } from 'react'


export default async function Home() {

  return (
    <div>
      <Suspense fallback={<h1 className='text-5xl'>Loading feed...</h1>}>
        <FetchPhotos />
      </Suspense>
    </div>
  );
}

const FetchPhotos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos")
  const data = await res.json()

  return (
    <ul>
      {data.map((item: any) => 
        <li key={item.title} className="">{item.title}</li>
      )}
    </ul>
  )
  
}







// const res = await fetch("https://jsonplaceholder.typicode.com/photos", {next: {revalidate: 10}})
// const res = await fetch("https://jsonplaceholder.typicode.com/photos", { next: { tags: ['collection'] } })