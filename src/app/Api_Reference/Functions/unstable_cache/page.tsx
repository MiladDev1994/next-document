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
                برای کش کردن واکشی داده ها از دیتابیس
              </div>
              
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                import { getUser } from './data';
                import { unstable_cache } from 'next/cache';
                
                const getCachedUser = unstable_cache(
                  async (id) => getUser(id),
                  ['my-app-user']
                );
                
                export default async function Component({ userID }) {
                  const user = await getCachedUser(userID);
                  ...
                }
              `}
          </SyntaxHighlighter>
          
          <br />

          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                یک option هم میتونیم براش درنظر بگیریم که برای تعیین revalidate , revalidateTag , revalidatePath استفاده میشه
              </div>
              
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                const options = {
                  revalidate: 3600,
                  tag: "tag name"
                }
                const data = unstable_cache(fetchData, keyParts, options)()
              `}
          </SyntaxHighlighter>
          <br />
        </div>
    )
}