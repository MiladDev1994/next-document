import localFont from 'next/font/local'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


  const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Defining_Routes() {


    return (
        <div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        برای ایجاد کردن مسیر داینامیک کافیه اسم فولدر رو داخل [ ] قرار بدیم و بعد از المان دوم فانکشن مربوط به page بگیریمش
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        export default function Page({ params }: { params: { slug: string } }) {
                            return <div>My Post: {params.slug}</div>
                          }
                    `}
                </SyntaxHighlighter>


            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        یه نکته بسیار مهم داریم . وقتی یک صفحه به صورت داینامیک باشه نکست در زمان بیلد تمام اون صفحات رو میسازه چون ذاتا SSG هستش
                    </div>
                    <div>
                        حالا تصور کن این مسیر داینامیک یک میلیون صفحه داشته باشه
                    </div>
                    <div>
                        الان اگه بخواد در زمان بیلد همه اونارو بسازه رسما جر میخوره
                    </div>
                    <div>
                        حالا این همه رو گفتم تا به اینجا برسم. نکست یه فانکشن به اسم generateStaticParams() در اختیار ما میذاره که میتونیم بهش بگیم مثلا تو فقط 10 تا مسیر اول رو در زمان بیلد بساز و بقیه رو وقتی که اون صفحه باز شد ایجاد کن
                    </div>
                    <div>
                        بعدا به موقع در مورد این فانکشن جذاب صحبت میکنیم
                    </div>
                </h4>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        برای ایجاد مسیرهای داینامیک تو در تو که به اصطلاح بهشون Catch-all Segments میگن از [...pathName] استفاده میکنیم
                    </div>
                    <div>
                        و برای اینکه مسیر اصلی هم شامل بشه از دوتا براکت استفاده میکنیم [[...pathName]] . یعنی optional میشه
                    </div>
                </h4>
            </div>
        </div>
    )
}