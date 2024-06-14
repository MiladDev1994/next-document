import localFont from 'next/font/local'
import Link from "next/link";


const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Error_Handling() {
    return (
        <div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    نکست یه فایل دیگه به اسم loading.js در اختیار ما میذاره برای هندل کردن ارورها

                    <div>این فایل حتما باید در کلاینت اجرا بشه</div>
                    <div>دوتا مقدار  رو به عنوان props به ما میده که اولی ارور هستش و دومی برای اجرای مجدد کامپوننتی که به ارور خورده</div>
                </h4>
                <Link 
                    href="Error_Handling/test_error" 
                    className='text-sky-500 hover:text-sky-600'
                    prefetch={false}
                >
                    Test Error
                </Link>
                

            </div>
            
        </div>
    )
}