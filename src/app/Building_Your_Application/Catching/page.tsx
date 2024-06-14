import localFont from 'next/font/local'
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


const myFont = localFont({ src: '../../../assets/fonts/IRANSansWeb.woff' })

export default function Error_Handling() {
    return (
        <div>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                نکست مدعیه که وقتی ما یه دیتایی رو فچ میکنیم اون رو کش میکنه
              </div>
              <div>
                یعنی وقتی یه api قراره جاهای مختلف فچ بشه ، کافیه اون رو بسپریم به یه فانکشن و اون فانکشن رو هرجا که خواستیم استفاده کنیم
              </div>
              <div>
                چون نکست مقدار اون رو کش میکنه و همیشه رکوعست نمیزنه
              </div>
              <div>
                این اتفاق رو که بهش میگن Memoization فقط در متد GET اجراییه
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                async function getItem() {
                  // The fetch function is automatically memoized and the result
                  // is cached
                  const res = await fetch('https://.../item/1')
                  return res.json()
                }
                 
                // This function is called twice, but only executed the first time
                const item = await getItem() // cache MISS
                 
                // The second call could be anywhere in your route
                const item = await getItem() // cache HIT
              `}
          </SyntaxHighlighter>
          <br/>
              <div>
                این بخش مباحث سنگینی داره که فعلا نیازی به خوندنش نیست
              </div>
        </div>
    )
}