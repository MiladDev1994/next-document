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
                برای دریافت یه سری اطلاعات در مورد هر صفحه استفاده میشه
              </div>
              
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                useReportWebVitals((metric) => {
                  console.log(metric)
                })

                // Time to First Byte (TTFB)
                // First Contentful Paint (FCP)
                // Largest Contentful Paint (LCP)
                // First Input Delay (FID)
                // Cumulative Layout Shift (CLS)
                // Interaction to Next Paint (INP)
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