'use server'
 
import { revalidateTag, revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
 
export default async function revalidate() {

    revalidatePath('/one-demand')
    redirect("/one-demand")
}