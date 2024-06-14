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
                برای دریافت اطلاعات دستگاه کاربر
              </div>
              
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
               import { NextRequest, NextResponse, userAgent } from 'next/server'
 
                export function middleware(request: NextRequest) {
                  const url = request.nextUrl
                  const { device } = userAgent(request)
                  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
                  url.searchParams.set('viewport', viewport)
                  return NextResponse.rewrite(url)
                }
              `}
          </SyntaxHighlighter>
        </div>
    )
}