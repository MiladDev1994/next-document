import Link from "next/link";

export default function TestIntercepting () {

    return (
        <div className="">
            <Link href="byModal/posts" className="text-sky-500 hover:text-sky-600 block">Posts</Link>
        </div>
    )
}