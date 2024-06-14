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
                request.cookies.set('show-banner', 'false')
                request.cookies.get('show-banner')
                request.cookies.getAll('experiments')
                request.cookies.getAll()
                request.cookies.delete('experiments')
                request.cookies.has('experiments')
                request.cookies.clear()
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                برای دریافت اطلاعات url
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                request.nextUrl.pathname
                request.nextUrl.searchParams
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                برای دریافت ip . نمیدونم کاربردش چیه
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                request.ip
                request.headers.get('X-Forwarded-For')
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                برای دریافت اطلاعات جغرافیایی
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                request.geo.city
                request.geo.country
                request.geo.region
                request.geo.latitude
                request.geo.longitude
                
                // Self-hosting
                function getGeo(request) {
                  let ip = request.headers.get('X-Forwarded-For')
                  // Use a third-party service to lookup the geographic information
                }
              `}
          </SyntaxHighlighter>
          <br/>
        </div>
    )
}