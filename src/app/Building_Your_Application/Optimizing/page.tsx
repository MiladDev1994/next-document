import Links from "@/components/Links/Links";
export default async function Routing() {

  const InPath = "Optimizing"

  const Paths = [
    "Images",
    "Videos",
    "Fonts",
    "Metadata",
    "Scripts",
    "Bundle Analyzer",
    "Lazy Loading",
    "Analytics",
    "Instrumentation",
    "OpenTelemetry",
    "Static Assets",
    "Third Party Libraries",
    "Memory Usage",
    
  ]
  
  return (
    <Links paths={Paths} InPath={InPath}/>
  )
} 