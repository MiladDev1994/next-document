import Links from "@/components/Links/Links";
export default async function Routing() {

  const InPath = "Rendering"

  const Paths = [
    "Server Components",
    "Client Components",
    "Composition Patterns",
    "Edge and Node.js Runtimes",
  ]
  
  return (
    <Links paths={Paths} InPath={InPath}/>
  )
} 