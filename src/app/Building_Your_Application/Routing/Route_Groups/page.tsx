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
                        برای اینکه فولدرهایی تو مسیر app داشته باشیم که به عنوان روت شناسایی نشه میتونیم اسم اون فولدر رو داخل پرانتز قرار بدیم
                    </div>
                    <div>
                        نا گفته نمونه که مسیرهای داخل این فولدر خونده میشن
                    </div>
                </h4>
            </div>
        </div>
    )
}