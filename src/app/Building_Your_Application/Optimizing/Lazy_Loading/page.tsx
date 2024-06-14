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
                در نکست این امکان رو داریم که تو هر مسیری فقط کدهایی که تو لحظه بهشون نیاز داریم لود بشه و بقیه کد و کامپوننت ها به موقع نیاز لود بشه
              </div>
              <div>
                برای انجام اینکار دوتا راه داریم
              </div>
              <div>
                Dynamic Imports with next/dynamic
              </div>
              <div>
                React.lazy() with Suspense
              </div>
          </h4>
          <Link 
              href="Lazy_Loading/Test_Dynamic" 
              className='text-sky-500 hover:text-sky-600'
              prefetch={false}
          >
            Test Dynamic
          </Link>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                'use client' // فقط برای useState . dynamic بهش نیازی نداره و تو سرور هم اجرا میشه
                
                import { useState } from 'react'
                import dynamic from 'next/dynamic'
                
                // Client Components:
                const ComponentA = dynamic(() => import('../components/A'))
                const ComponentB = dynamic(() => import('../components/B'))
                const ComponentC = dynamic(() => import('../components/C'), { ssr: false }) // برای غیر فعال کردن پیش رندر
                
                export default function ClientComponentExample() {
                  const [showMore, setShowMore] = useState(false)
                
                  return (
                    <div>
                      {/* Load immediately, but in a separate client bundle */}
                      <ComponentA />
                
                      {/* Load on demand, only when/if the condition is met */}
                      {showMore && <ComponentB />}
                      <button onClick={() => setShowMore(!showMore)}>Toggle</button>
                
                      {/* Load only on the client side */}
                      <ComponentC />
                    </div>
                  )
                }
              `}
          </SyntaxHighlighter>

          <br/>

          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                با استفاده از import() میتونیم کتابخانه های خارجی هم ایکپورت کنیم
              </div>
              <div>
                برای انجام اینکار دوتا راه داریم
              </div>
              <div>
                Dynamic Imports with next/dynamic
              </div>
              <div>
                React.lazy() with Suspense
              </div>
          </h4>
          <Link 
              href="Lazy_Loading/External_Libraries" 
              className='text-sky-500 hover:text-sky-600'
              prefetch={false}
          >
            Test External Libraries
          </Link>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                'use client'
 
                import { useState } from 'react'
                 
                const names = ['Tim', 'Joe', 'Bel', 'Lee']
                 
                export default function Page() {
                  const [results, setResults] = useState()
                 
                  return (
                    <div>
                      <input
                        type="text"
                        placeholder="Search"
                        onChange={async (e) => {
                          const { value } = e.currentTarget
                          // Dynamically load fuse.js
                          const Fuse = (await import('fuse.js')).default
                          const fuse = new Fuse(names)
                 
                          setResults(fuse.search(value))
                        }}
                      />
                      <pre>Results: {JSON.stringify(results, null, 2)}</pre>
                    </div>
                  )
                }
                
              `}
          </SyntaxHighlighter>

          <br/>

          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                به این داینامیک ایمپورت های میتونیم لودینگ هم اضافه کنیم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                import dynamic from 'next/dynamic'
 
                const WithCustomLoading = dynamic(
                  () => import('../components/WithCustomLoading'),
                  {
                    loading: () => <p>Loading...</p>,
                  }
                )
                 
                export default function Page() {
                  return (
                    <div>
                      {/* The loading component will be rendered while  <WithCustomLoading/> is loading */}
                      <WithCustomLoading />
                    </div>
                  )
                }
              `}
          </SyntaxHighlighter>

          <br/>

          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
            <div>
              و حتی ایپورت به صورت پرامیس و به صورت async
            </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                import dynamic from 'next/dynamic'
 
                const ClientComponent = dynamic(() =>
                  import('../components/hello').then((mod) => mod.Hello)
                )
              `}
          </SyntaxHighlighter>

          <br/>

        </div>
    )
}