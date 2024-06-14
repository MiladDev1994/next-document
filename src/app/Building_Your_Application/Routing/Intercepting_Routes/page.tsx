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
                    <div>
                        Intercepting Route این امکان رو به ما میده که یک مسیر رو تو مسیر های دیگه فراخوانی کنیم
                    </div>
                    <div>
                        مشکلی که برای ایجاد کردن مدال تو قسمت parallel داشتیم حالا با استفاده از این قابلیت کاملا حل شد
                    </div>
                    <div>
                        Intercepting 4 تا حالت میتونه داشته باشه
                    </div>
                    <div>
                        (.) ==== برای مسیر های هم سطح استفاده میشه
                    </div>
                    <div>
                        (..) ==== برای یک مسیر بالاتر
                    </div>
                    <div>
                        (..)(..) ==== برای دو مسیر بالاتر که البته به گفته خود نکست فعلا مشکل داره و کار نمیکنه
                    </div>
                    <div>
                        (...) ==== برای مسیری که در روت اصلی و فولدر app قرار داره
                    </div>
                    <div>
                        توضیح کتبی اینا اصلا ممکن نیست. به تست رجوع کن
                    </div>
                </h4>
                <Link href={"Intercepting_Routes/Test_Intercepting"} className='text-sky-500 hover:text-sky-600'>Test Intercepting</Link>
            </div>
        </div>
    )
}