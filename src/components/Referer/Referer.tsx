"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
export default function Referer() {

    const pathName = usePathname()
    const paths: string[] = []
    pathName.split("/").forEach((ele: string) => {
        if (!paths.length) return paths.push("")
        const newPath = [...paths].pop()
        paths.push(`${newPath}/${ele}`)
    })
    

    if (pathName !== "/") {
        return (
            <>
                <div className="w-full h-20 flex items-center justify-start gap-5 fixed top-0 right-0 px-3 backdrop-blur-3xl">
                    {paths.map((ele: any) => 
                        <Link 
                            key={`${ele}_page`} 
                            href={!ele ? "/" : ele}
                            className={`
                                ${pathName.replace("/", "").split("/").pop() === ele.split("/").pop() ? "bg-teal-500 hover:bg-teal-600" : "bg-yellow-500 hover:bg-yellow-600"} 
                                 text-zinc-900 rounded-sm p-1 text-sm`}
                        >{!ele ? "Home" : ele.replaceAll("_", " ").split("/").pop()}</Link>
                    )}
                </div>
                <div className="w-full h-20"></div>
            </>
        )
    } else return null
}