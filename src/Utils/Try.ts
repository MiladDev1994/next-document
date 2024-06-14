import { connectDB } from "@/Utils/connectDB";
import { redirect } from "next/navigation";

export const Try = async () => {
    try {
        await connectDB()
    } catch (error){
        redirect("/error/server-error")
    }
}