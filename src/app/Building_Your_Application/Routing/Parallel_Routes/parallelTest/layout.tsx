'use client'
 
import { useSelectedLayoutSegments } from 'next/navigation'

export default function Layout({
    children,
    parallel_1,
    parallel_2,
}: {
    children: React.ReactNode;
    parallel_1: React.ReactNode;
    parallel_2: React.ReactNode;
}) {
    const loginSegment = useSelectedLayoutSegments("parallel_1")

    return (
        <div>
            {children}
            {parallel_1}
            {parallel_2}
        </div>
    )
}