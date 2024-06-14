import localFont from 'next/font/local'
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


  const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Defining_Routes() {


    return (
        <div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        این بخش مربوط به مسیرهای موازی هستش
                    </div>
                    <div>
                        برای ایجاد مسیر موازی به ابتدای اسم مسیر @ اضافه میکنیم
                    </div>
                    <div>
                        به عنوان مثال اگر من دوتا مسیر موازی به اسم های @user و @posts داشته باشم میتونم به این شکل اون هارو به فایل layout.js اضافه کنم
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        export default function Layout({
                            children,
                            user,
                            posts,
                          }: {
                            children: React.ReactNode
                            posts: React.ReactNode
                            user: React.ReactNode
                          }) {
                            return (
                              <>
                                {children}
                                {user}
                                {posts}
                              </>
                            )
                          }
                    `}
                </SyntaxHighlighter>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        هر کدوم از این مسیرها میتونن زیر مسیرهای مربوط به خودشونو داشته باشن اما به یه چالش جالب میخوریم
                    </div>
                    <div>
                        اگر در مسیر موازی، اون مسیری وجود نداشته باشه چی؟  ،  
                        نمیشه که یه مسیر بره اینوری یه مسیر بره اونوری
                    </div>
                    <div>
                        برای حل این مسعله از فایل default.js استفاده میکنیم که یعنی اگر فلان مسیر وجود نداشت ارور نده و بجاش این فایل default رو نمایش بده
                    </div>
                </h4>
            </div>
            <div className='border-b py-3'>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        useSelectedLayoutSegment() یا useSelectedLayoutSegments()
                    </div>
                    <div>
                        این هوک به ما کمک میکنه تا بفهمیم تو کدوم مسیر هستیم
                    </div>
                    <div>
                        با استفاده از parallel میتونیم مدال هم ایجاد کنیم که نیازی به onClick نداره و در سرور کنترل میشه
                    </div>
                    <div>
                        تو بخش تست در مورد مدال هم مثال زدم اما خیلی خوب از آب درنیومده. فکر کنم نکست درآینده بیشتر درموردش توضیح میده
                    </div>
                </h4>
                <Link href={"Parallel_Routes/parallelTest"} className='text-sky-500 hover:text-sky-600'>Test parallel </Link>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                        import { useSelectedLayoutSegments } from 'next/navigation'

                        export default function Layout({
                            children,
                            parallel_1,
                            parallel_2,
                        }: {
                            children: React.ReactNode;
                            parallel_1: React.ReactNode;
                            parallel_2: React.ReactNode;
                        }) {
                            const loginSegment = useSelectedLayoutSegments("parallel_1")
                            console.log(loginSegment)
                        
                            return (
                                <div>
                                    {children}
                                    {parallel_1}
                                    {parallel_2}
                                </div>
                            )
                        }
                    `}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}