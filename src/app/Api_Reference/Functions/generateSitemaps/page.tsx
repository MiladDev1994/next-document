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
                از سایت مپ برای شناسوندن سایتمون به گوگل استفاده میکنیم و به خزنده های گوگل برای شناسایی بخش هایی که میخوایم راهنمایی میدیم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                import { BASE_URL } from '@/app/lib/constants'
 
                export async function generateSitemaps() {
                  // Fetch the total number of products and calculate the number of sitemaps needed
                  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
                }
                
                export default async function sitemap({
                  id,
                }: {
                  id: number
                }): Promise<MetadataRoute.Sitemap> {
                  // Google's limit is 50,000 URLs per sitemap
                  const start = id * 50000
                  const end = start + 50000
                  const products = await getProducts(
                    "SELECT id, date FROM products WHERE id BETWEEN start AND end"
                  )
                  return products.map((product) => ({
                    url: "BASE_URL/product/product.id",
                    lastModified: product.date,
                  }))
                }
              `}
          </SyntaxHighlighter>
        </div>
    )
}