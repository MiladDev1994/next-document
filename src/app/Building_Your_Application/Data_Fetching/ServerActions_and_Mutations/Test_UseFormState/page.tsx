


'use client'
 
import { useFormState, useFormStatus } from 'react-dom'
import { createUser } from './actions'
import localFont from 'next/font/local'
const initialState = {
    status: true,
    message: '',
}
const myFont = localFont({ src: '../../../../../assets/fonts/IRANSansWeb.woff' })
 
export default function UseFormStatePage() {
  const [state, formAction] = useFormState(createUser, initialState)
  const { pending } = useFormStatus()
 
  console.log(pending)
  return (
    <form action={formAction} className='flex flex-col'>
        <span className={`my-10 text-lg ${myFont.className}`}  dir="rtl">ولیدیشن : حتما بیشتر از 3 کاراکتر باشه و milad هم داشته باشه</span>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" required className='bg-gray-800'/>
        {/* ... */}
        <ul className="text-red-400">
            {!state.status && Object.entries(state?.message)?.map(([errorKey, errorValue]) => 
                <li key={errorKey}>
                    <span>{errorKey}</span>
                    <span>{errorValue?.map((text: string) => `${text},`)}</span>
                </li>
            )}
        </ul>
        <button>Sign up</button>
    </form>
  )
}