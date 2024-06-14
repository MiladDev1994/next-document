import localFont from 'next/font/local'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


  const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Route_Handlers () {
    return (
        <div className="">
            
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        به صورت کلی با این بخش آشنا هستم فقط یه سری موارد مهم رو مینویسم
                    </div>
                    <div>
                        در route ها دیتا فچینگ ها وقتی از متد GET استفاده میکنیم به صورت خودکار کش میشه
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        export async function GET() {
                            const res = await fetch('https://data.mongodb-api.com/...', {
                              headers: {
                                'Content-Type': 'application/json',
                                'API-Key': process.env.DATA_API_KEY,
                              },
                            })
                            const data = await res.json()
                           
                            return Response.json({ data })
                          }
                    `}
                </SyntaxHighlighter>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        Response.json() فقط در تایپ اسکریپت 5 به بالا ساپورت میشه . در غیر اینصورت باید از NextResponse.json() استفاده کینم
                    </div>
                    <div>
                        برای کش نکردن روت ها چنتا کار میتونیم بکنیم :
                    </div>
                    <div>
                        استفاده از متد GET که Request در اون فراخوانی شده باشد ===  function GET(request: Request) 
                    </div>
                    <div>
                        استفاده از بقیه متدهای HTTP
                    </div>
                    <div>
                        استفاده از ئاینامیک روت ها و فراخوانی کوکی و هدر
                    </div>
                    <div>
                        مشخص کردن به صورت دستش با استفاده از Segment Config Options
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        export const dynamic = 'auto'
                        export const dynamicParams = true
                        export const revalidate = false
                        export const fetchCache = 'auto'
                        export const runtime = 'nodejs'
                        export const preferredRegion = 'auto'
                    `}
                </SyntaxHighlighter>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        ما میتونیم با استفاده از revalidate مدت زمان کش کردن دیتا رو تغییر بدیم
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        export async function GET() {
                            const res = await fetch('https://data.mongodb-api.com/...', {
                              next: { revalidate: 60 }, // Revalidate every 60 seconds
                            })
                            const data = await res.json()
                           
                            return Response.json(data)
                          }
                    `}
                </SyntaxHighlighter>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        برای اعمال کردن روی کل روت و یا زمانی که مستقیما به دیتا بیس متصلیم میتونیم از متغییر زیر استفاده کنیم
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        export const revalidate = 60
                    `}
                </SyntaxHighlighter>
            </div>
            
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        برای دریافت کوکی میتونیم از next/headers استفاده کینیم
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        import { cookies } from 'next/headers'
 
                        export async function GET(request: Request) {
                          const cookieStore = cookies()
                          const token = cookieStore.get('token')
                         
                          return new Response('Hello, Next.js!', {
                            status: 200,
                            headers: { 'Set-Cookie': "token=token.value" },
                          })
                        }
                    `}
                </SyntaxHighlighter>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        همجنین میتونیم کوکی رو از request با استفاده از nextRequest بگیریم
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        import { type NextRequest } from 'next/server'
 
                        export async function GET(request: NextRequest) {
                          const token = request.cookies.get('token')
                        }
                    `}
                </SyntaxHighlighter>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        header هم شباهت زیادی به کوکی داره
                    </div>
                    <div>
                        برای دریافت هم میتونیم از next/headers استفاده کنیم و هم NextRequest
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        //next/headers
                        import { headers } from 'next/headers'
 
                        export async function GET(request: Request) {
                          const headersList = headers()
                          const referer = headersList.get('referer')
                         
                          return new Response('Hello, Next.js!', {
                            status: 200,
                            headers: { referer: referer },
                          })
                        }


                        // NextRequest 
                        import { type NextRequest } from 'next/server'
 
                        export async function GET(request: NextRequest) {
                            const requestHeaders = new Headers(request.headers)
                        }
                    `}
                </SyntaxHighlighter>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        برای دریافت query از روت
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        import { type NextRequest } from 'next/server'
                        
                        export function GET(request: NextRequest) {
                            const searchParams = request.nextUrl.searchParams
                            const query = searchParams.get('query')
                            // query is "hello" for /api/search?query=hello
                        }
                    `}
                </SyntaxHighlighter>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        برای دریافت اطلاعات body
                    </div>
                    <div>برای ولیدیشن از zod استفاده میکنیم
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        export async function POST(request: Request) {
                            const res = await request.json()
                            return Response.json({ res })
                        }
                    `}
                </SyntaxHighlighter>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        برای دریافت اطلاعات FormData
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        export async function POST(request: Request) {
                            const formData = await request.formData()
                            const name = formData.get('name')
                            const email = formData.get('email')
                            return Response.json({ name, email })
                        }
                    `}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}