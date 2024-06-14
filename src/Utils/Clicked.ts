import Click from "@/models/Admin/Click"

export async function ClickedUtil(path: string) {
    // const referer = await req.headers.get('referer')
    const click = await Click.findOne({path})
    if (click) {
        await Click.updateOne({path}, {
            $inc: {count: +1 }
        })
    } else {
        await Click.create({
            path,
            count: 1
        })
    }

}