import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function RevalidateTagTest() {

    const res = await fetch("https://jsonplaceholder.typicode.com/comments", { next: { tags: ['catchName'] }})
    const data = await res.json()

    const revalidateTagHandler = async () => {
        "use server"
        revalidateTag("catchName")
        // redirect("")
    }

    const revalidatePathHandler = async () => {
        "use server"
        revalidatePath("/Building_Your_Application/Data_Fetching/Fetching_Catching_and_Revalidating/Test_RevalidateTag")
        // redirect("")
    }

    return (
        <div>
            <div className="flex">
                <form action={revalidateTagHandler}>
                    <button className="p-2 bg-pink-400 border border-pink-700 m-10 rounded-md">Delete Catch by Tag</button>
                </form>
                <form action={revalidatePathHandler}>
                    <button className="p-2 bg-pink-400 border border-pink-700 m-10 rounded-md">Delete Catch by Path</button>
                </form>
            </div>
            <div>
                {data.map((ele: any) => <div key={ele.id}>{ele.email}</div>)}
            </div>
        </div>
    )
}