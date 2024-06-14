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
                برای توسعه api یه سری موارد رو بهمون میده
              </div>
              <div>
                برای دریافت اطلاعات کوکی
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                let response = NextResponse.next()

                response.cookies.set('show-banner', 'false')
                response.cookies.get('show-banner')
                response.cookies.getAll('experiments')
                response.cookies.getAll()
                response.cookies.delete('experiments')
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                برای ارسال اطلاعات سمت فرانت
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                export async function GET(request: Request) {
                  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
                }
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                برای ریدایرکت
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                return NextResponse.redirect(new URL('/new', request.url))
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                برای تایید ادامه مسیر در میدلویر
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                return NextResponse.next()
              `}
          </SyntaxHighlighter>
          <br/>
        </div>
    )
}