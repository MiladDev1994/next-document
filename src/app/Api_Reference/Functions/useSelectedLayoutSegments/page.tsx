"use client"
import { unstable_cache } from 'next/cache';
import localFont from 'next/font/local'
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useReportWebVitals } from 'next/web-vitals'

const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })


export default function Error_Handling() {
    useReportWebVitals((metric) => {
      console.log(metric)
    })
  
  return (
        <div>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                برای دریافت لیست تمام لایه هایی که بصورت پله ای رفتیم داخ از هوک useSelectedLayoutSegments استفاده میکنیم
              </div>
              <div>
                کافیه داخل یه layout ازش استفاده کنیم تا تمام لایه های زیرش رو بهمون بده
              </div>
              
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                'use client'
 
                import { useSelectedLayoutSegment } from 'next/navigation'
                
                export default function ExampleClientComponent() {
                  const segment = useSelectedLayoutSegment()
                
                  return <p>Active segment: {segment}</p>
                }
              `}
          </SyntaxHighlighter>

          <br />
          
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                این اطلاعات رو میشه فرستاد برای بک و کار های مربوطه رو روش انجام داد
              </div>
          </h4>
        </div>
    )
}