import localFont from 'next/font/local'
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


  const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Defining_Routes() {


    return (
        <div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    فچ کردن دیتا یا هر عملیات دیگه که نیاز به زمان داره رو میشه با فایل loading.js هندل کرد
                    <div> به این صورت کهاین فایل رو داخل مسیر مربوطه کنار page قرار میدیم </div>
                </h4>
                <Link 
                    href="Loading_UI_and_Streaming/test_loading" 
                    className='text-sky-500 hover:text-sky-600'
                    prefetch={false}
                >Test Loading</Link>

            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    با استفاده از Suspense هم میشه عملیات لودینگ رو انجام داد
                    <div> در صفحات SSR که بعدا مفصل بهش میپردازیم شرایط به این صورته که: </div>
                    <div>ابتدا اطلاعات خواسته شده در سرور فچ میشه</div>
                    <div>فایل Html و Css در سرور ساخته میشه</div>
                    <div>فایل های ساخته شده برای کلاینت ارسال میشه</div>
                    <div>اطلاعات در کلاینت نمایش داده میشه</div>
                    <div>به مجموع این اتفاقات میگن hydrates</div>

                    <div>با توجه به مواردی که ذکر شد دیگه درست نیست از لودینگ استفاده کنیم . چون درست نیست تمام بخش های یه صفحه منتظر یه بخش بمونن</div>
                    <div> حالا با استفاده از suspense میتونیم این مسعله رو حل کنیم و هر کامپوننتی که نیاز به لودینگ داره رو بهش پاس بدیم </div>
                </h4>
                <Link 
                    href="Loading_UI_and_Streaming/test_suspense" 
                    className='text-sky-500 hover:text-sky-600'
                    prefetch={false}
                >Test Suspense</Link>
                

                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        import { Suspense } from 'react'
                        import MyComponent from './Components'

                        export default function Posts() {
                            return (
                                <section>
                                    <Suspense fallback={<p>Loading feed...</p>}>
                                        <MyComponent />
                                    </Suspense>
                                </section>
                            )
                        }
                    `}
                </SyntaxHighlighter>

            </div>
            
        </div>
    )
}