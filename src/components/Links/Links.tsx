import Link from "next/link";

export default function Links({paths, InPath}: {paths: string[], InPath: string}) {

  const combinePath = paths.map(path => `${InPath}/${path}`)

  return (
    <div className="flex flex-col gap-3 p-3">
      {combinePath.map((item: string) => 
        <Link 
          key={item.replaceAll(" ", "_")} 
          href={`${item.replaceAll(" ", "_")}`} 
          prefetch={false}
          className="bg-zinc-800 hover:bg-zinc-700 p-5 rounded-md"
        >
          {item.split("/").pop()}
        </Link>
      )}
    </div>
  )
}