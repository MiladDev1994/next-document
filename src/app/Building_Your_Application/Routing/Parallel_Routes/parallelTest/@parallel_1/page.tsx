import Link from "next/link";

export default function Parallel_1() {
    return (
        <div>
            <div>Parallel_1</div>
            <Link href={"parallelTest/route_1"} className='text-sky-500 hover:text-sky-600 block'>Route 1</Link>
            <Link href={"parallelTest/route_2"} className='text-sky-500 hover:text-sky-600 block'>Route 2</Link>
            <Link href={"parallelTest/modal"} className='text-sky-500 hover:text-sky-600 block'>Modal</Link>
        </div>
    )
}