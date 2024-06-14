import Link from "next/link";

export default function Modal() {
    return (
        <div className="w-full h-full flex items-center justify-center text-9xl fixed right-0 top-0 backdrop-blur-sm">
            <Link href={"/Building_Your_Application/Routing/Parallel_Routes/parallelTest"}>close</Link>
            Modal
        </div>
    )
}