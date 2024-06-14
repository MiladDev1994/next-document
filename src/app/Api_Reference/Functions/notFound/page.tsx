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
                برای انتقال به صفحه not found
              </div>
              
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                import { notFound } from 'next/navigation'
 
                async function fetchUser(id) {
                  const res = await fetch('https://...')
                  if (!res.ok) return undefined
                  return res.json()
                }
                
                export default async function Profile({ params }) {
                  const user = await fetchUser(params.id)
                
                  if (!user) {
                    notFound()
                  }
                
                  // ...
                }
              `}
          </SyntaxHighlighter>
          
        </div>
    )
}