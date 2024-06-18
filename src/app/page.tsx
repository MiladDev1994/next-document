import Links from "@/components/Links/Links";
export default async function Home() {

  const InPath = ""

  const Paths = [
    // "Getting Started",
    "Building Your Application",
    "Api Reference",
    "Architecture",
    "Community",
    "pwa",
  ]
  
  return (
    <Links paths={Paths} InPath={InPath}/>
  )
} 







