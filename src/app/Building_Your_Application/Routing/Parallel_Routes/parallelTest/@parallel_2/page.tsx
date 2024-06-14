import Link from "next/link";

export default function Parallel_2() {
    return (
        <div>
            <div>Parallel_2</div>
            <Link href={"parallelTest/route_1"} className='text-sky-500 hover:text-sky-600 block'>Route 1</Link>
            <Link href={"parallelTest/route_3"} className='text-sky-500 hover:text-sky-600 block'>Route 3</Link>
            <Link href={"parallelTest/modal"} className='text-sky-500 hover:text-sky-600 block'>Modal</Link>
        </div>
    )
}