

export default async function Home() {

    
  const res = await fetch("https://jsonplaceholder.typicode.com/photos")
  const data = await res.json()

  return (
    <div>
        <ul>
        {data.map((item: any) => 
            <li key={item.title} className="">{item.title}</li>
        )}
        </ul>
    </div>
  );
}