import Link from "next/link";

export default function TestIntercepting () {

    return (
        <div className="">
            <Link href="level_1/level_2" className="text-sky-500 hover:text-sky-600 block">Level 2</Link>
        </div>
    )
}