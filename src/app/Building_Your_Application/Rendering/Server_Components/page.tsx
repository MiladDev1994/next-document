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
                رندر شدن اطلاعات در سرور به سه طریق انجام میشود 
              </div>
              <br />
              <div>
                Static:
              </div>
              <div>
                این حالت دیفالت نکست میباشد. در این حالت صفحه مرد نظر یکبار و در زمان بیلد ساخته شده و دیگر تغییر نمیکند و هر تغییر در اطلاعات مربوط به این صفحه اتفاق بایفتد تاثسیری نخواهد داشت
              </div>
              <br />
              <div>
                Dynamic:
              </div>
              <div>
                همونطور که از اسمش پیداست برای ساخت صفحات پویا ازش استفاده میشه و بعد از هربار باز شدن صفحه تمام اطلاعات مجدد واکشی شده و نمایش داده میشه
              </div>
              <div>
                این عمل به صورت خودکار توسط نکست هندل میشه
              </div>
              <div>
                در صفحاتی که  Cookies() و headers() و searchParams استفاده بشن ،نکست به صورت خودکار این صفحات رو داینامیک میکنه
              </div>
              <div>
              <br />
                Streaming:
              </div>
              <div>
                در این روش صفحه به قطعات کوچک تقسیم میشه و هر قسمت بسته به شرایط استاتیک یا داینامیک خواهد بود
              </div>
          </h4>
          <br/>
        </div>
    )
}