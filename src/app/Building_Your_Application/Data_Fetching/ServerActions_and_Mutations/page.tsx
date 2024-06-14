import localFont from 'next/font/local'
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Error_Handling() {
    return (
        <div>
            <div>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>Revalidate Data by On-demand:</div>
                    <div>
                        server action  event هایی هستن که تو سرور خوانده میشه
                    </div>
                    <div>
                        با قرار دادن use server در یک تابع async میتونیم یک server action داشته باشیم
                    </div>
                    <div>
                        اقدامات سرور را می توان با استفاده از ویژگی action در عنصر form فراخوانی کرد:
                    </div>
                    <div>
                        یکی از ویژگی های جالب این روش اینه که حتی اگر جاوااسکریت هم بارگیری نشده باشه اطلاعات ارسال میشه
                    </div>
                    <div>
                        در پشت صحنه، اکشن ها از روش POST استفاده می کنند و فقط این روش HTTP می تواند آنها را فراخوانی کند.
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                       // Server Component
                       export default function Page() {
                         // Server Action
                         async function create() {
                           'use server'
                        
                           // ...
                         }
                        
                         return (
                           // ...
                         )
                       }
                    `}
                </SyntaxHighlighter>

                <br/>
                
                <div>
                    <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                        <div>
                            برای دریافت اطلاعات فرم react به کمکمون میاد و با استفاده از formData میتونیم اطلاعات رو بدون نیاز به هوک ها استخراج کنیم
                        </div>
                        <div>
                            اگر تعداد اینپوت های فرم زیاد شد میتونیم از Object.fromEntries(formData) استفاده کنیم
                        </div>
                    </h4>
                    <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                        {`
                            export default function Page() {
                                async function createInvoice(formData: FormData) {
                                'use server'
                            
                                const rawFormData = {
                                    customerId: formData.get('customerId'),
                                    amount: formData.get('amount'),
                                    status: formData.get('status'),
                                }
                            
                                // mutate data
                                // revalidate cache
                                }
                            
                                return <form action={createInvoice}>...</form>
                            }
                        `}
                    </SyntaxHighlighter>
                </div>

                <br/>

                <div>
                    <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                        <div>
                            من دلیل ایجاد کردن فایل های action رو تازه متوجه شدم.وقتی یه عملیات سروری مثل دریافت و یا آپدیت اطلاعت قراره تو page انجام بشه ، منتقلش میکنم تو فایل action که کثیفکاری نشه
                        </div>
                        <div>
                            مثلا من میتونم اطلاعات فرم رو با استفاده از action مربوط به فرم به فایل action منتقل کنم و حتی با استفاده از bind() بهش دیتا هم اضافه کنم
                        </div>
                    </h4>
                    <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                        {`
                            // app/client-component.tsx
                            'use client' // or 'use server'
                
                            import { updateUser } from './actions'
                            
                            export function UserProfile({ userId }: { userId: string }) {
                            const updateUserWithId = updateUser.bind(null, userId)
                            
                            return (
                                <form action={updateUserWithId}>
                                <input type="text" name="name" />
                                <button type="submit">Update User Name</button>
                                </form>
                            )
                            }



                            // actions.ts
                            'use server'
 
                            export async function updateUser(userId, formData) {
                                // ...
                            }
                        `}
                    </SyntaxHighlighter>
                </div>

                <br/>
                
                <div>
                    <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                        <div>
                            برای ایجاد کردن لودینگ که البته فقط سمت client امکانپذیره هوک useFormStatus  رو داریم
                        </div>
                    </h4>
                    <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                        {`
                            'use client'
 
                            import { useFormStatus } from 'react-dom'
                             
                            export function SubmitButton() {
                              const { pending } = useFormStatus()
                             
                              return (
                                <button type="submit" disabled={pending}>
                                  Add
                                </button>
                              )
                            }
                        `}
                    </SyntaxHighlighter>
                </div>

                <br/>
                
                <div>
                    <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                        <div>برای ولیدیشن فرم در server میتونیم از zod استفاده کنیم. شباهت زیادی به ولیدیشن های اکسپرس داره
                        </div>
                    </h4>
                    <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                        {`
                            // app/actions.ts
                            'use server'
 
                            import { z } from 'zod'
                             
                            const schema = z.object({
                              email: z.string({
                                invalid_type_error: 'Invalid Email',
                              }),
                            })
                             
                            export default async function createUser(formData: FormData) {
                              const validatedFields = schema.safeParse({
                                email: formData.get('email'),
                              })
                             
                              // Return early if the form data is invalid
                              if (!validatedFields.success) {
                                return {
                                  errors: validatedFields.error.flatten().fieldErrors,
                                }
                              }
                             
                              // Mutate data
                            }
                        `}
                    </SyntaxHighlighter>
                </div>

                <br/>
                
                <div>
                    <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                        <div>
                            برای دریافت ارورهای مربوط به ولید نبودن اطلاعات میتونیم از هوک useFormState استفاده کنیم و کلا action رو بدیم بهش
                        </div>
                    </h4>
                    <Link 
                        href="ServerActions_and_Mutations/Test_UseFormState" 
                        className='text-sky-500 hover:text-sky-600'
                        prefetch={false}
                    >
                        Test UseFormState
                    </Link>
                    <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                        {`
                            'use client'
 
                            import { useFormState } from 'react-dom'
                            import { createUser } from '@/app/actions'
                             
                            const initialState = {
                              message: '',
                            }
                             
                            export function Signup() {
                              const [state, formAction] = useFormState(createUser, initialState)
                             
                              return (
                                <form action={formAction}>
                                  <label htmlFor="email">Email</label>
                                  <input type="text" id="email" name="email" required />
                                  {/* ... */}
                                  <p aria-live="polite" className="sr-only">
                                    {state?.message}
                                  </p>
                                  <button>Sign up</button>
                                </form>
                              )
                            }
                        `}
                    </SyntaxHighlighter>
                </div>

                <br/>
                
                <div>
                    <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                        <div>
                            فرض کنیم ما یه آرایه از یوزرها داریم و با map دارم نمایششون میدیم
                        </div>
                        <div>
                            حالا یه فرمی هم داریم که میتونیم یوزر اضافه کنیم
                        </div>
                        <div>
                            بعد از اضافه کردن یوزر جدید باید ui آپدیت بشه و یوزر جدید هم نمایش بده
                        </div>
                        <div>
                            کاری که من قبلا میکردم این بود که مقدار یوزر جدید رو از ریسپانس میگرفتم و اسپرد میکردم تو مقدار قبلی که کاملا اوکی بود
                        </div>
                        <div>
                            حالا با یه هوک جدید آشنا شدم به اسم useOptimistic که همین کارو برام انجام میده اما به نظرم یه سری ایرادات داره
                        </div>
                        <div>
                            این هوک میگه که تو مقدار اولیه رو به من بده بعد مقدار جدیدی که میخوای اضافه کنی هم بهم بده.  حالا من این عملیات اسپرد رو انجا میدم برات
                        </div>
                        <div>
                            البته این بزرگوار توجهی به بک اند نداره و کاری نداره اطلاعات تو دیتابیس نشسته یا نه فقط فرانت رو آپدیت میکنه و اگر اطلاعات تو دیتابیس نشینه دوباره با حالت قبل برمیگرده
                        </div>
                    </h4>
                    <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                        {`
                            'use client'
 
                            import { useOptimistic } from 'react'
                            import { send } from './actions'
                             
                            type User = {
                              user: string
                            }
                             
                            export function Thread({ users }: { users: User[] }) {
                              const [optimisticUsers, addOptimisticUser] = useOptimistic<
                                User[],
                                string
                              >(users, (state, newUser) => [...state, { user: newUser }])
                             
                              return (
                                <div>
                                  {optimisticUsers.map((m, k) => (
                                    <div key={k}>{m.message}</div>
                                  ))}
                                  <form
                                    action={async (formData: FormData) => {
                                      const user = formData.get('user')
                                      addOptimisticMessage(user)
                                      await create(user)
                                    }}
                                  >
                                    <input type="text" name="user" />
                                    <button type="submit">Send</button>
                                  </form>
                                </div>
                              )
                            }
                        `}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    )
}