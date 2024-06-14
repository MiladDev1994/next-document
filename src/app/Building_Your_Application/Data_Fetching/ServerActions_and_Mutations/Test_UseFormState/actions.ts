// 'use server'
 
// export async function createUser(prevState: any, formData: FormData) {
//   // ...
//   return {
//     message: 'Please enter a valid email',
//   }
// }

'use server'
 
import { z } from 'zod'
 
const schema = z.object({
  email: z
    .string({
        invalid_type_error: 'Invalid Email',
    })
    .max(3)
    .regex(/milad/ig).refine((val) => /milad/ig.test(val), {
        message: "Custom message for regex validation failure",
    }),
})
 
export async function createUser(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        email: formData.get('email'),
    })
 
  // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            status: false,
            message: validatedFields.error.flatten().fieldErrors,
        }
    }
    return {
        status: true,
        message: "Success"
    }
 
  // Mutate data
}