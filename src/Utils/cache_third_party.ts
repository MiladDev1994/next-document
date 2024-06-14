import Click from '@/models/Admin/Click'
import { cache } from 'react'
 
export const getItem = cache(async () => {
    const res = await Click.find()
    return res
})