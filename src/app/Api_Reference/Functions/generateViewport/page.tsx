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
                نمیدونم کاربردش چیه ولی برای ایجاد فایل متا استفاده میشه
              </div>
              <div>
                دوتا روش برای ایجاد کردنش داریم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                // روش اول
                export function generateViewport({ params }) {
                  return {
                    themeColor: '...',
                  }
                }
                    
                // روش دوم
                import type { Viewport } from 'next'
 
                export function generateViewport(): Viewport {
                  return {
                    themeColor: 'black',
                  }
                }
              `}
          </SyntaxHighlighter>
        </div>
    )
}