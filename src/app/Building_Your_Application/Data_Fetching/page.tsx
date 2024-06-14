import Links from "@/components/Links/Links";
export default async function Routing() {

  const InPath = "Data_Fetching"

  const Paths = [
    "Fetching Catching and Revalidating",
    "ServerActions and Mutations",
    "Data Fetching Patterns and Best Practices",
  ]
  
  return (
    <Links paths={Paths} InPath={InPath}/>
  )
} 