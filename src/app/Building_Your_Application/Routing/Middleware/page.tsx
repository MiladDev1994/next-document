import localFont from 'next/font/local'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


  const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Defining_Routes() {


    return (
        <div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        به طور کلی با middleware آشنایی اما یه سری نکات رو بازگو میکنم
                    </div>
                    <div>
                        همونطوری که از اسمش پیداست یه فیلتر بین درخواست کاربر و بک اند
                    </div>
                    <div>
                        موارد زیادی رو میشه باهاش انجام داد که هم کد ها تمیزتر باشه و هم حجم کدها بیاد پایین
                    </div>
                    <div>
                        مثلا برای authentication و authorization ، تعیین سطح دسترسی کاربر و permissions
                    </div>
                    <div>
                        توصیه میشه که میدلویر به صورت مستقیم با دیتا بیس در ارتباط نباشه بهتره
                    </div>
                    <div>
                        محاسبات سنگین به میدلویر واگذار نشه
                    </div>
                    <div>
                        برای کار با middleware یه فایل با همین نام کنار آخرین لایه ایجاد میکنیم
                    </div>
                    <div>
                        تمام دستورهای مربوط به بخش های مختلف تو همین فایل نوشته میشه اما با استفاده از یک متغییر به مسیر خودش ارتباط داده میشه
                    </div>
                    <div>
                        تمام دستورهای مربوط به بخش های مختلف تو همین فایل نوشته میشه اما با استفاده از یک متغییر به اسم config به مسیر خودش ارتباط داده میشه
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        import { NextResponse } from 'next/server'
                        import type { NextRequest } from 'next/server'
                         
                        // This function can be marked async if using await inside
                        export function middleware(request: NextRequest) {
                          return NextResponse.redirect(new URL('/home', request.url))
                        }
                         
                        // See "Matching Paths" below to learn more
                        export const config = {
                          matcher: '/about/:path*',
                        }
                    `}
                </SyntaxHighlighter>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        برای مشخص کردن مسیر ها 
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        // برای مسیر های داینامیک
                        export const config = {
                            matcher: '/about/:path*',
                        }

                        // برای چنتا مسیر از آرایه استفاده میکنیم
                        export const config = {
                            matcher: ['/about/:path*', '/dashboard/:path*'],
                        }

                        // حتی میتونیم از Regex استفاده کنیم
                        export const config = {
                            matcher: [
                              /*
                               * Match all request paths except for the ones starting with:
                               * - api (API routes)
                               * - _next/static (static files)
                               * - _next/image (image optimization files)
                               * - favicon.ico (favicon file)
                               */
                              '/((?!api|_next/static|_next/image|favicon.ico).*)',
                            ],
                        }
                    `}
                </SyntaxHighlighter>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        میتونه کاربردی باشه
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        import { NextResponse } from 'next/server'
                        import type { NextFetchEvent, NextRequest } from 'next/server'
                         
                        export function middleware(req: NextRequest, event: NextFetchEvent) {
                          event.waitUntil(
                            fetch('https://my-analytics-platform.com', {
                              method: 'POST',
                              body: JSON.stringify({ pathname: req.nextUrl.pathname }),
                            })
                          )
                         
                          return NextResponse.next()
                        }
                    `}
                </SyntaxHighlighter>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        دوتا پراپرتی هم داریم که خیلی توش ریز نمیشم
                    </div>
                    <div>
                        skipMiddlewareUrlNormalize & skipTrailingSlashRedirect
                    </div>
                    <div>
                        به نظر میاد برای حذف اسلش های روت ها استفاده میشه
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        // next.config.js
                        module.exports = {
                            skipTrailingSlashRedirect: true,
                            skipMiddlewareUrlNormalize: true,
                        }
                    `}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}