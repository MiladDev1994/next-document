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
                روش های مختلفی برای ساخت متادیتا وجود داره
              </div>
              <div>
                نیازی به زیر شدن تو این قسمت نیست
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                // متادیتا استاتیک
                import type { Metadata } from 'next'
 
                export const metadata: Metadata = {
                  title: '...',
                  description: '...',
                }
                 
                export default function Page() {}
                />
              `}
          </SyntaxHighlighter>
          <br/>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                // متادیتا برای صفحات داینامیک
                import type { Metadata, ResolvingMetadata } from 'next'
                
                type Props = {
                  params: { id: string }
                  searchParams: { [key: string]: string | string[] | undefined }
                }
                
                export async function generateMetadata(
                  { params, searchParams }: Props,
                  parent: ResolvingMetadata
                ): Promise<Metadata> {
                  // read route params
                  const id = params.id
                
                  // fetch data
                  const product = await fetch("https://.../id").then((res) => res.json())
                
                  // optionally access and extend (rather than replace) parent metadata
                  const previousImages = (await parent).openGraph?.images || []
                
                  return {
                    title: product.title,
                    openGraph: {
                      images: ['/some-specific-page-image.jpg', ...previousImages],
                    },
                  }
                }
                
                export default function Page({ params, searchParams }: Props) {}
              `}
          </SyntaxHighlighter>
          
          <br/>

          
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                متا دیتا در پایین ترین لایه over Write میشه روی لایه های بالایی
              </div>
              <div>
                حتی میشه متا دیتا رو تو یه فایل جدا نوشت و به قسمت های مختلف share کرد
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                // /shared-metadata.js
                export const openGraphImage = { images: ['http://...'] }


                // /page.js
                import { openGraphImage } from './shared-metadata'
 
                export const metadata = {
                  openGraph: {
                    ...openGraphImage,
                    title: 'Home',
                  },
                }


                // /about/page.js
                import { openGraphImage } from '../shared-metadata'
 
                export const metadata = {
                  openGraph: {
                    ...openGraphImage,
                    title: 'About',
                  },
                }

              `}
          </SyntaxHighlighter>
          
          <br/>

          
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                یه امکان دیگه به اسم JSON-LD داریم که با کمکش میتونیم برای صفحاتمون توصیف داشته باشیم
              </div>
              <div>
                برای سئو استفاده میشه ازش
              </div>
              <div>
                حتی میشه متا دیتا رو تو یه فایل جدا نوشت و به قسمت های مختلف share کرد
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                import { Product, WithContext } from 'schema-dts'
              
                export default async function Page({ params }) {
                  const product = await getProduct(params.id)
                  
                  const jsonLd: WithContext<Product> = {
                    '@context': 'https://schema.org',
                    '@type': 'Product',
                    name: 'Next.js Sticker',
                    image: 'https://nextjs.org/imgs/sticker.png',
                    description: 'Dynamic at the speed of static.',
                  }
                 
                  return (
                    <section>
                      {/* Add JSON-LD to your page */}
                      <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                      />
                      {/* ... */}
                    </section>
                  )
                }

              `}
          </SyntaxHighlighter>
        </div>
    )
}