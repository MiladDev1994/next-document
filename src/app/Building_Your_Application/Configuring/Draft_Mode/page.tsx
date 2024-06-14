import localFont from 'next/font/local'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


  const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default async function Route_Handlers () {


    return (
            
        <div className='border-b py-3'>
            <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                <div>
                    برای کش نشدن اطلاعات یک صفحه روش هایی داشتیم که قبلا در موردش صحبت کردیم
                </div>
                <div>
                    یکی دیگه از انی روشها استفاده از draftMode هستش که یک صفحه کاملا پویا بهمون میده که هم تو page و هم تو route قابل استفاده هستش
                </div>
                <div>
                    با استفاده از این قابلیت هر وقت که به اون route ریکوئست بزنیم یا از اون page بازدید کنیم . اطلاعات دسته اول و تازه دریافت میکنیم و هیچ کشی وجود نداره
                </div>
            </h4>
            <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                {`
                    import { draftMode } from 'next/headers'

                    export async function GET(request: Request) {
                        draftMode().enable()
                        return new Response('Draft mode is enabled')
                    }
                `}
            </SyntaxHighlighter>

            <br/>

            <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                <div>
                    نکات جالب :
                </div>

                <br/>

                <div>فکر نیمکنم استفاده همزمان از draftMode با revalidate یا {"catch: force-catch"} کار درستی باشه
                </div>

                <br/>

                <div>
                    موقع استفاده از fetch اگر مقدار cache رو no-catch قرار بدیم یعنی اطلاعات رو کش کن اما هروقت که درخواستی اومد اول چک کن ببین اطلاعات نسبت به قبل تغییر داشته یا نه و اگر تغییری داشت اطلاعات جدید رو بهم بده
                </div>
                <div>
                    اما وقتی از no-store استفاده کنیم یعنی کلا کش نکن
                </div>

                <br/>

                <div>
                    تو نکست ورژن های قدیمی ما نمیتونستیم به سرور خودمون رکوئست GET بزنیم و لی الان در اقدامی عجیب میتوونیم اینکارو بکنیم
                </div>

            </h4>

        </div>
    )
}