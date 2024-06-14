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
                درمورد تتگ video و پراپرتی ها
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                <video 
                    width="400" 
                    height="240" 
                    controls // نوار کنترل
                    preload="metadata" // شناسایی سایز ویدیو برای نمایش اولیه
                    playsInline	// برای IOS
                    autoPlay // پخش بلافاصله ویدیو
                    loop // تکرار پخش
                    muted={false} // بیصدا
                >
                  <source src={videSrc} type="video/mp4" />

                  {/* برای زیرنویس */}
                  <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
              `}
          </SyntaxHighlighter>
          <br/>

          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                برای نمایش ویدیو از سایر پلتفرم ها از iframe استفاده میکنیم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                <iframe
                  src={videSrc} 
                  width="400" 
                  height="240" 
                  frameborder="0"
                  allowfullscreen
                  loading="lazy"
                  title="Description"
                />
              `}
          </SyntaxHighlighter>
          <br/>

        </div>
    )
}

// https://persian8.asset.aparat.com/aparat-video/7ff11ae92f34b9e1ed86a9275c692f8a51983933-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Ijg0YmVkYjBlNDg3MTg4NjkxYWViZGY1ZGIxZTc2MTYxIiwiZXhwIjoxNzE3NDM3MDAzLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.FzrfK1y4B6odNttdjDqqDCEs7_gbCv33iSM-deIQbbc