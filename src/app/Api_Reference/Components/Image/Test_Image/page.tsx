"use client"
import localFont from 'next/font/local'
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';
import pic from "../../../../../../public/image.jpg"

const myFont = localFont({ src: '../../../../../assets/fonts/IRANSansWeb.woff' })

export default function TestImage () {

    const imageLoader = ({ src, width, quality }: any) => {
        console.log(src)
        // return `https://example.com/${src}?w=${width}&q=${quality || 75}`
        return "https://corporate.walmart.com/content/corporate/en_us/purpose/sustainability/planet/nature/jcr:content/par/image_2_0.img.png/1693432526985.png"
        // return "https://corporate.walmart.com/content/corporate/en_us/purpose/sustainability/planet/nature/jcr:content/par/image_13.img.png/1693432412814.png"
        // return "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/16:9/w_1920%2Cc_limit/gettyimages-1146431497.jpg"
    }

    const imageStyle = {
        borderRadius: '50%',
        border: '1px solid #fff',
    }

    return (
            
        <Image
            loader={imageLoader}
            src={pic}
            alt="Picture of the author"
            width={1000}
            height={500}
            // quality={0}
            // fill
            // sizes="33vw"
            loading='lazy'
            placeholder = 'blur' // "empty" | "blur" | "data:image/..."
            style={imageStyle}
            onLoadingComplete={(img) => console.log(img.naturalWidth)}
            onLoad={(e: any) => console.log(e.target.naturalWidth)}
            onError={(e: any) => console.error(e.target.id)}
            unoptimized = {false} // {false} | {true}
        />
    )
}