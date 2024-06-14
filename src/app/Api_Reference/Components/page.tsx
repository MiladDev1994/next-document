import Links from "@/components/Links/Links";
import Link from "next/link";
export default async function Building_Your_Application() {

  
  const InPath = "Components"

  const Paths = [
    "Font",
    "Image",
    "Link",
    "Script",
  ]
  
  return (
    <>
      <Links paths={Paths} InPath={InPath}/>
    </>
  )
}