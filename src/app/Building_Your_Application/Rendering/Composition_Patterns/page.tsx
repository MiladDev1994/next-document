import localFont from 'next/font/local'
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Error_Handling() {
    return (
        <div>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                یه نکته جالب : برای اینکه یه متغییر محلی از فایل .env توی کلاینت هم بهش دسترسی داشته باشیم باید پیشوند NEXT_PUBLIC رو بهش اضافه کنیم
              </div>
              <div>
                فقط باید به این نکته توجه کنیم که شاید اون اطلاعات نباید در کلاینت و در دسترس کاربر باشه
              </div>
              <div>برای جلوگیری از این اتفاق میتونیم از پکیج server-nly استفاده کنیم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                  npm install server-only


                  import 'server-only'
 
                  export async function getData() {
                    const res = await fetch('https://external-service.com/data', {
                      headers: {
                        authorization: process.env.API_KEY,
                      },
                    })
                   
                    return res.json()
                  }
              `}
          </SyntaxHighlighter>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
              اکنون، هر کامپوننت کلاینت که getData() را وارد می کند یک خطای زمان ساخت دریافت می کند که توضیح می دهد این ماژول فقط می تواند در سرور استفاده شود.
              </div>
          </h4>

          <br/>

          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                اگر از کامپوننت یا پکیجی استفاده کنیم که حتما باید تو کلاینت اجرا بشه میتونیم از روش زیر استفاده کنیم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                  'use client'
 
                  import { Carousel } from 'acme-carousel'
                   
                  export default Carousel
              `}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                  import Carousel from './carousel'
 
                  export default function Page() {
                    return (
                      <div>
                        <p>View pictures</p>
                   
                        {/*  Works, since Carousel is a Client Component */}
                        <Carousel />
                      </div>
                    )
                  }
              `}
          </SyntaxHighlighter>
          <br/>

          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                ما نمیتونیم از یک سرور کامپوننت در کلاینت کامپوننت استفاده کنیم. اما میتونیم به عنوان children بهش پاس بدیم
              </div>
          </h4>
          <br/>

        </div>
    )
}