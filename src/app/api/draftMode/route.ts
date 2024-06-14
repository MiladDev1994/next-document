import { Try } from "@/Utils/Try"
import Project from "@/models/Admin/Project"
import { draftMode } from "next/headers"
import { userAgent } from "next/server"

// export const revalidate = 20 // revalidate at most every hour
// export const fetchCache = 'default-no-store'
export async function GET(request: Request) {

    // const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    // const project = await res.json()

    await Try()
    const project = await Project.find()

    const device = userAgent(request)
    console.log(device)

    draftMode().enable()
    console.log(draftMode().isEnabled)

    return Response.json({project})
}
// "auto" | "force-no-store" | "only-no-store" | "default-no-store" | "default-cache" | "only-cache" | "force-cache"