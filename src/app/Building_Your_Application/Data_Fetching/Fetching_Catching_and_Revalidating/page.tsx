import localFont from 'next/font/local'
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Error_Handling() {
    return (
        <div>
            <div>
                <div className='border-b py-3'>
                    <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                        <div>
                            4 تا راه برای fetch کردن دیتا داریم
                        </div>
                        <div>
                            در server با استفاده از fetch
                        </div>
                        <div>
                            در server با استفاده از third party
                        </div>
                        <div>
                            در client با استفاده از route handler
                        </div>
                        <div>
                            در client با استفاده از third party
                        </div>
                        <br />

                    </h4>

                    <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                        <div>Fetching Data:</div>
                        <div>نکست به صورت خودکار تمام data ftching ها رو کش میکنه. یعنی مقدار دیفالتش حالت زیره که میتونیم ننویسیمش</div>
                    </h4>
                    <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                        {`
                        // 'force-cache' is the default, and can be omitted
                        fetch('https://...', { cache: 'force-cache' })
                        `}
                    </SyntaxHighlighter>
                        
                    <br />

                    <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                        <div>Revalidate Data by Time:</div>
                        <div>
                            برای دور زدن کش کردن دیتا دوتا کار میتونیم انجام بدیم. یا براش تایم مشخص کنیم یا به صورت دستی و با استفاده از فرم کش رو حذف کنیم
                        </div>
                    </h4>
                    <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                        {`
                            fetch('https://...', { next: { revalidate: 3600 } })

                            // or

                            // این بر روی همه data fetching های یک page اعمال میشه
                            export const revalidate = 3600 // revalidate at most every hour
                        `}
                    </SyntaxHighlighter>
                        
                    <br />

                    <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                        <div>Revalidate Data by On-demand:</div>
                        <div>
                            در این روش با استفاده از مسیر یا اسمی که برای کش میذاریم میتونیم مقدار کش شده رو حذف کنیم
                        </div>
                    </h4>
                    <Link 
                        href="Fetching_Catching_and_Revalidating/Test_RevalidateTag" 
                        className='text-sky-500 hover:text-sky-600'
                        prefetch={false}
                    >
                        Test Revalidate
                    </Link>
                    <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                        {`
                            // با استفاده از اسم
                            export default async function Page() {
                                const res = await fetch('https://...', { next: { tags: ['collection'] } })
                                const data = await res.json()
                                // ...
                            }


                            // lib/action.js
                            'use server'
 
                            import { revalidateTag } from 'next/cache'
                            
                            export default async function action() {
                            revalidateTag('collection')
                            }
                        `}
                    </SyntaxHighlighter>
                        
                    <br />

                    <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                        <div>
                            با انجام موارد زیر دیگه دیتا کش نمیشه
                        </div>
                        <div>
                            اگر مقدار کش رو موقع fetch روی no-store تنظیم کنیم
                        </div>
                        <div>
                            اگر مقدار revalidate = 0
                        </div>
                        <div>
                            اگر متد GET نباشه
                        </div>
                        <div>
                            اگر header یا cookies رو فراخوانی کنیم
                        </div>
                        <div>
                            ایجاد مسیر داینامیک با استفاده از const dynamic = force-dynamic
                        </div>
                    </h4>
                    <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                        {`
                            fetch('https://...', { cache: 'no-store' })



                            const dynamic = 'force-dynamic'
                        `}
                    </SyntaxHighlighter>
                        
                    <br />

                    <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                        <div>
                            وفتی از کتبخاه های third party استفاده میکنیم دیگه fetch وجود نداره که بخوایم ازش فرای کش کردن یا مکردن استفاده کنیم
                        </div>
                    </h4>
                    <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                        {`
                            export const revalidate = 3600 // revalidate the data at most every hour
                        `}
                    </SyntaxHighlighter>

                </div>
                
            </div>
            
        </div>
    )
}