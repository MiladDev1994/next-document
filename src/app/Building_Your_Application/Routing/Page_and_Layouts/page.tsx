import localFont from 'next/font/local'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


  const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Defining_Routes() {


    return (
        <div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    داخل هر مسیر یا فولدری که ایجاد میکنیم یه سری فایل به صورت پیشفرض قرار داره که نصبت به همدیگه در اجرا الویت دارن
                    مثلا فایل 
                    <div>layout.js</div>    
                    <div>template.js</div>    
                    <div>page.js</div>    
                    <div>loading.js</div>    
                    <div>error.js</div>    
                    <div>not-found.js (این فقط برای مسیر اصلی استفاده میشه)  </div>  
                    الویت اجرا === layout  -  template  -  page
                </h4>
            </div>

            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    نکست یه Metadata در اختیار ما میذاره که میتونیم باهاش فاوآیکون ، فونت و خیلی چیزای دیگه رو تغییر بدیم و معمولا در فایل page.js قرار میگیره
                </h4>

                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        import { Metadata } from 'next'
 
                        export const metadata: Metadata = {
                          title: 'Next.js',
                        }
                    `}
                </SyntaxHighlighter>
            </div>
            
        </div>
    )
}