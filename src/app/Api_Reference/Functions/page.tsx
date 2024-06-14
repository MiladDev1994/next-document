import Links from "@/components/Links/Links";


export default async function Building_Your_Application() {

  
  const InPath = "Functions"

  const Paths = [
    "generateImageMetadata",
    "generateMetadata",
    "generateSitemaps",
    "generateStaticParams",
    "generateViewport",
    "ImageResponse",
    "NextRequest",
    "NextResponse",
    "notFound",
    "unstable_cache",
    "unstable_noStore",
    "useReportWebVitals",
    "useSelectedLayoutSegments",
    "userAgent",
  ]
  
  return (
    <>
      <Links paths={Paths} InPath={InPath}/>
    </>
  )
}