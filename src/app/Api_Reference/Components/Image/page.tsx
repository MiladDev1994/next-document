"use client"
import localFont from 'next/font/local'
import Image from 'next/image';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';

const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Route_Handlers () {
    return (
        <div className='border-b py-3'>
            <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                <div>
                    کلیاتی در مورد تگ Image
                </div>
            </h4>
            <Link 
                href="Image/Test_Image" 
                className='text-sky-500 hover:text-sky-600'
                prefetch={false}
            >
                Test Image
            </Link>
            <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                {`

                    const imageStyle = {
                        borderRadius: '50%',
                        border: '1px solid #fff',
                    }

                    <Image
                        loader={imageLoader} // باید آدرس یک عکس رو ریترن کنه و الویت داره برا src
                        src={pic}
                        alt="Picture of the author"
                        width={1000}
                        height={500}
                        // quality={0}
                        // fill // تمام صفحه رو پوشش میده
                        // sizes="33vw"
                        loading='lazy'
                        placeholder = 'blur' // "empty" | "blur" | "data:image/..."
                        style={imageStyle}
                        onLoadingComplete={(img) => console.log(img.naturalWidth)}
                        onLoad={(e: any) => console.log(e.target.naturalWidth)}
                        onError={(e: any) => console.error(e.target.id)}
                        unoptimized = {false} // {false} | {true}
                    />
                `}
            </SyntaxHighlighter>

            <br/>

        </div>
    )
}