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
                این بخش درمورد روش های متعدد استفاده از از فونت بحث میکنه
              </div>
              <div>
                نیازی به زیر شدن تو این قسمت نیست
              </div>
          </h4>
          
          <br/>

        </div>
    )
}