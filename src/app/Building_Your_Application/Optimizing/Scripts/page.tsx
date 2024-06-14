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
                برای افزودن اسگریپت به صورت دستی هم نکست برامون راهکار داره
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`

                // در layout اصلی
                import Script from 'next/script'
 
                export default function RootLayout({
                  children,
                }: {
                  children: React.ReactNode
                }) {
                  return (
                    <html lang="en">
                      <body>{children}</body>
                      <Script src="https://example.com/script.js" />
                    </html>
                  )
                }



                // در سایر layout ها
                import Script from 'next/script'
 
                export default function DashboardLayout({
                  children,
                }: {
                  children: React.ReactNode
                }) {
                  return (
                    <>
                      <section>{children}</section>
                      <Script src="https://example.com/script.js" />
                    </>
                  )
                }
              `}
          </SyntaxHighlighter>

          <br/>

          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                برای این تگ Script استراتژی های مختلفی رو میتونیم در نظر بگیریم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                <Script 
                  src="https://example.com/script.js"  
                  strategy="beforeInteractive" // قبل از هیدراتاسیون
                  strategy="afterInteractive" // بعد از هیدراتاسیون
                  strategy="lazyOnload" // زمان بیکاری مرورگر
                  strategy="worker" // در زمان کار (فعلا ناپایداره)
                />
              `}
          </SyntaxHighlighter>

          <br/>

          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                استراتژی worker فعلا ناپایداره و فقط وقتی میتونیم ازش استفاده کنیم که nextScriptWorkers فعال باشه
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                module.exports = {
                  experimental: {
                    nextScriptWorkers: true,
                  },
                }
              `}
          </SyntaxHighlighter>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                اگر در زمان توسعه با ارور مواجه شدین npm install @builder.io/partytown را نصب کنید
              </div>
          </h4>

          <br/>

          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                از script های درون خطی هم میشه استفاده کرد
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                <Script id="show-banner">
                  {'document.getElementById('banner').classList.remove('hidden')'}
                </Script>

                // یا 

                <Script
                  id="show-banner" // برای اینکه توسط نکست ردیابی بشه
                  dangerouslySetInnerHTML={{
                    __html: "document.getElementById('banner').classList.remove('hidden')",
                  }}
                />
              `}
          </SyntaxHighlighter>

          <br/>

          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                و حتی میتونیم از event handler ها استفاده کنیم. فقط باید در کلاینت کامپوننت ها باشه
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                <Script
                  src="https://example.com/script.js"
                  onLoad={() => {
                    console.log('Script has loaded')
                  }}
                />
              `}
          </SyntaxHighlighter>
        </div>
    )
}