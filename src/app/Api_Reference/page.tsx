import Links from "@/components/Links/Links";
import Link from "next/link";
export default async function Building_Your_Application() {

  
  const InPath = "Api Reference"

  const Paths = [
    "Components",
    "Functions",
  ]
  
  return (
    <>
      <Links paths={Paths} InPath={InPath}/>
    </>
  )
} 