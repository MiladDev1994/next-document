import { unstable_cache } from 'next/cache';
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
                برای ذخیره نشدن واکشی داده ها از دیتابیس
              </div>
              
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                import { unstable_noStore as noStore } from 'next/cache';
 
                export default async function Component() {
                  noStore();
                  const result = await db.query(...);
                  ...
                }
              `}
          </SyntaxHighlighter>
        </div>
    )
}