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
                    4 تا روش برای تفییر مسیر در نکست داریم
                    <div> استفاده از تگ Link (server & client) </div>
                    <div> هوک useRouter (client)</div>
                    <div>  redirect (server)</div>
                    <div> navigation api</div>
                </h4>

                

                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        import Link from 'next/link'

                        <Link href="/dashboard#settings">Settings</Link> // jsx
                    `}
                </SyntaxHighlighter>

            </div>
            
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    تگ لینک یه پراپرتی به اسم scroll داره که اسکرول صفحه ای وه داخلش هستیم رو کش میکنه و اگر دوباره به همو صفحه برگردیم اسکرول تغییر نمیکنه
                </h4>

                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        <Link href="/dashboard" scroll={false}>
                        Dashboard
                        </Link>
                    `}
                </SyntaxHighlighter>

            </div>
            
            
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    از این پراپرتی تو هوک useRouter هم میشه استفاده کرد
                </h4>


                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        import { useRouter } from 'next/navigation'
 
                        const router = useRouter()
                        
                        router.push('/dashboard', { scroll: false })
                    `}
                </SyntaxHighlighter>

            </div>
            
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    میتونیم با استفاده از ویندوز هم مسیر رو تغییر بدیم
                </h4>


                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        window.history.pushState("")
                        window.history.replaceState("")
                    `}
                </SyntaxHighlighter>

            </div>


            <div className='border-b py-3'>
                
                <h4 className={`text-xl ${myFont.className}`} dir="rtl">
                    یه مفهومی داریم به اسم code splitting 
                </h4>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    وقتی کاربر به مسیر جدیدی هدایت می‌شود، مرورگر صفحه را مجدداً بارگیری نمی‌کند و تنها بخش‌های مسیری که تغییر می‌کنند، دوباره ارائه می‌شوند - تجربه ناوبری و عملکرد را بهبود می‌بخشد.
                </h4>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    فقط کد مورد نیاز برای مسیر فعلی در ناوبری بارگیری می شود    
                </h4>
            </div>


            <div className='border-b py-3'>
                
                <h4 className={`text-xl ${myFont.className}`} dir="rtl">
                    یه مفهومی داریم به اسم Prefetching 
                </h4>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    Prefetching مشخص میکنه که اطلاعات هر page قبل از ورود بهش fetch بشه یا نه 
                </h4>

                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        <Link href="/dashboard" prefetch={true}> Dashboard </Link>

                        //

                        const router = useRouter()
                        router.prefetch()
                    `}
                </SyntaxHighlighter>
            </div>
            
        </div>
    )
}