import Links from "@/components/Links/Links";
export default async function Routing() {

  const InPath = "Configuring"

  const Paths = [
    "Draft Mode",
  ]
  
  return (
    <Links paths={Paths} InPath={InPath}/>
  )
} 