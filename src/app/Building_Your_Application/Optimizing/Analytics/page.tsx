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
                این بخش درمورد آنالیز کردن صفحات وب با استفاده از هوک useReportWebVitals هستش
              </div>
              <div>
                چون در کلاینت اجرا میشه پیشنهاد میشهتو یه کامپوننت مجزا نوشته بشه
              </div>
              <div>
                از این هوک میتونیم یه سری اطلاعات رو بگیریم و بفرستیم برای بک
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                'use client'
  
                import { useReportWebVitals } from 'next/web-vitals'
                
                export function WebVitals() {
                  useReportWebVitals((metric) => {
                    console.log(metric)
                  })
                }
              `}
          </SyntaxHighlighter>
          <br/>

        </div>
    )
}
