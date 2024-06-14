import localFont from 'next/font/local'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


  const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Defining_Routes() {


    return (
        <div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    5 روش برای ریدایرکت کردن کاربر به مسیر های مختلف وجود داره
                    <div> redirect (server)</div>
                    <div> permanentRedirect (server)</div>
                    <div> useRouter (client)</div>
                    <div> next.config.js</div>
                    <div> NextResponse.redirect (api & middleware)</div>

                </h4>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        3 تا مورد اول رو باهاش کار کردم و بلدم اما مورد چهارم برای اینه که وقتی یه مسیری کلا از پروژه ما حذف شده، و کاربر بر حسب عادت بازش کرد، هدایتش کنیم به یه مسیر دیگه
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        module.exports = {
                            async redirects() {
                                return [
                                // Basic redirect
                                {
                                    source: '/about',
                                    destination: '/',
                                    permanent: true,
                                },
                                // Wildcard path matching
                                {
                                    source: '/blog/:slug',
                                    destination: '/news/:slug',
                                    permanent: true,
                                },
                                ]
                            },
                        }
                    `}
                </SyntaxHighlighter>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        مورد آخر هم برای تغییر مسیر در middleware هستش که فکر کنم تو api هم میتونیم ازش استفاده کینم
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        import { NextResponse, NextRequest } from 'next/server'
                        import { authenticate } from 'auth-provider'
                         
                        export function middleware(request: NextRequest) {
                          const isAuthenticated = authenticate(request)
                         
                          // If the user is authenticated, continue as normal
                          if (isAuthenticated) {
                            return NextResponse.next()
                          }
                         
                          // Redirect to login page if not authenticated
                          return NextResponse.redirect(new URL('/login', request.url))
                        }
                         
                        export const config = {
                          matcher: '/dashboard/:path*',
                        }
                    `}
                </SyntaxHighlighter>
            </div>
            
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        ریدایرکت کردن تو middleware مفهوم وسیع تری داره و اگر لازم شد بعدا درموردش بخون
                    </div>
                </h4>
            </div>
        </div>
    )
}