// import Link from "next/link";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Referer from "../components/Referer/Referer";

export default async function Template({ children }: { children: React.ReactNode }) {

    return (
        <div className="px-3">
            <Referer />
            {children}
        </div>
    )
  }