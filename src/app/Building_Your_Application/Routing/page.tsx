import Links from "@/components/Links/Links";
export default async function Routing() {

  const InPath = "Routing"

  const Paths = [
    "Defining Routes",
    "Page and Layouts",
    "Linking and Navigating",
    "Loading UI and Streaming",
    "Error Handling",
    "Redirecting",
    "Route Groups",
    "Project Organization",
    "Dynamic Routes",
    "Parallel Routes",
    "Intercepting Routes",
    "Route Handlers",
    "Middleware",
    "Internationalization",
  ]
  
  return (
    <Links paths={Paths} InPath={InPath}/>
  )
} 