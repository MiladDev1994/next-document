import Link from "next/link";

export default function TestIntercepting () {

    return (
        <div className="">
            <Link href="1_level/level_1" className="text-sky-500 hover:text-sky-600 block">Level 1</Link>
        </div>
    )
}