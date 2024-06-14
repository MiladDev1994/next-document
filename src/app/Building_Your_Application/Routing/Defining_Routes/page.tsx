import localFont from 'next/font/local'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


  const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Defining_Routes() {

    const text = " ایجاد کردن مسیر ها در نکست با استفاده از فولدر انجام میشه" + " " +
    "یعنی یه فولدر با اسم 'user' در فولدر 'app' ایجاد میکنیم و حالا یه مسیر به آدرس '/user' داریم"

    return (
        <div>
            <h4 className={`text-lg ${myFont.className}`} dir="rtl">{text}</h4>
        </div>
    )
}