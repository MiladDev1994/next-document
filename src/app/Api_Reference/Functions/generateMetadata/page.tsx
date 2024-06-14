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
                از اسمش پیداست که برای ایجاد کردن متا دیتاها استفاده میشه
              </div>
              <div>
                باید در فایل page یا layout قرار بگیره
              </div>
              <div>
                برای ایجاد متا دیتا دوتا راه داریم
              </div>
          </h4>
          <Link 
              href="generateMetadata/Test_generateMetadata" 
              className='text-sky-500 hover:text-sky-600'
              prefetch={false}
          >
              Test generateMetadata
          </Link>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                // روس اول 
                import { Metadata } from 'next'
 
                export const metadata: Metadata = {
                  title: '...',
                  description: '...',
                }
                
                export default function Page() {}


                // روش دوم . این مثال برای داینامیک روته ا هستش اما برای روت های استاتسک هم کاربرد داره
                import { Metadata, ResolvingMetadata } from 'next'
                
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
                مباحث این قسمت خیلی وسیعتر از این حرفاست و فعلا جایز نیست در مورد تمام جزئیات تحقیق بشه
              </div>
          </h4>
        </div>
    )
}