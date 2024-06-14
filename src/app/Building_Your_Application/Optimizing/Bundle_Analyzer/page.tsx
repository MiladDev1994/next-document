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
                همونطوری که از اسمش پیداست برای آنالیز کردن اپ استفاده میشه
              </div>
              <div>
                فعلا نیازی به یادگیری نیست
              </div>
          </h4>
        </div>
    )
}