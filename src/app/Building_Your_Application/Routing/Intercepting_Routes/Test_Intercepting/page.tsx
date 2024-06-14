import Link from "next/link";

export default function TestIntercepting () {

    return (
        <div className="">
            <Link href="Test_Intercepting/byModal" className="text-sky-500 hover:text-sky-600 block">By Modal</Link>
            <Link href="Test_Intercepting/0_level" className="text-sky-500 hover:text-sky-600 block">By (.)</Link>
            <Link href="Test_Intercepting/1_level" className="text-sky-500 hover:text-sky-600 block">By (..)</Link>
            <Link href="Test_Intercepting/2_level" className="text-sky-500 hover:text-sky-600 block">By (..)(..) فعلا کار نمیکنه</Link>
            <Link href="Test_Intercepting/app_level" className="text-sky-500 hover:text-sky-600 block">By (...)</Link>
        </div>
    )
}