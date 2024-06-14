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
                تگ Image پراپرتی Size هم میپذیره
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                  
                <div style={{ position: 'relative', height: '400px' }}>
                  <Image
                    alt="Mountains"
                    src={mountains}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="(min-width: 808px) 50vw, 100vw"
                    style={{
                      objectFit: 'cover', // cover, contain, none
                    }}
                  />
                </div>
              `}
          </SyntaxHighlighter>
          <br/>

        </div>
    )
}