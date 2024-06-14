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
                        در این قسمت نکست چنتا راه برای استراکچر پروژه بهمون پیشنهاد میده
                    </div>
                    <div>
                        1 __ میتونیم کامپوننت هارو داخل مسیر های اصلی قرار بدیم فقط باید حواسمون باشه از اسم های رزرو شده استفاده نکنیم
                    </div>
                    <div>
                        2 __ برای اینکه یک پوشه به عنوان مسیر شناسایی نشه میتونیم از _ در ابتدای اسمش استفاده کنیم (users_)
                    </div>
                    <div>
                        3 __ همونطور که قبلا گفتم میتونیم از پرانتز هم استفاده کنیم
                    </div>

                    <div>
                        یه امکان جالب دیگه ای که نکست به ما میده Module Path Aliases هستش که میاد به همه فایل  ها یک مبدا میده و با @ بهشون آدرس دهی میکنه
                    </div>
                    <div>
                        در نهایت هیچ اجباری برای پیروی کردن از این استراکچر وجود نداره . حتی میتونیم کامپوننت هارو در خارجی ترین لایه برنامه قرار بدیم
                    </div>
                </h4>
            </div>
        </div>
    )
}