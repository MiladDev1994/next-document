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
                از این فانکشن برای ساخت ایجاد صفحات داینامیک در زمان بیلد استفاده میشه
              </div>
              <div>
                مثلا اگر ما یک صفحه داینامیک داشته باشیم که 100 تا مسیر رو تو خودش داشته باشه میتونیم با استفاده از این فانکشن بهش بفهمونیم که در زمان بیلد مثلا 50 تاشو بساز برامون
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                // Return a list of "params" to populate the [slug] dynamic segment
                export async function generateStaticParams() {
                  const posts = await fetch('https://.../posts').then((res) => res.json())
                
                  return posts.map((post) => ({
                    slug: post.slug,
                  }))
                }
                
                // Multiple versions of this page will be statically generated
                // using the "params" returned by "generateStaticParams"
                export default function Page({ params }) {
                  const { slug } = params
                  // ...
                }
              `}
          </SyntaxHighlighter>
        </div>
    )
}