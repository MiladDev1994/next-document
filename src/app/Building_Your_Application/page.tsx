import Links from "@/components/Links/Links";
import Link from "next/link";
export default async function Building_Your_Application() {

  
  const InPath = "Building Your Application"

  const Paths = [
    "Routing",
    "Data Fetching",
    "Rendering",
    "Catching",
    "Styling",
    "Optimizing",
    "Configuring",
    "Testing",
    "Authentication",
    "Deploying",
    "Upgrading",
  ]
  
  return (
    <>
      <Links paths={Paths} InPath={InPath}/>
    </>
  )
} 