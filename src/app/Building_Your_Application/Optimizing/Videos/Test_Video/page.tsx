export default function TestVideo() {
    const videSrc = "https://persian8.asset.aparat.com/aparat-video/7ff11ae92f34b9e1ed86a9275c692f8a51983933-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Ijg0YmVkYjBlNDg3MTg4NjkxYWViZGY1ZGIxZTc2MTYxIiwiZXhwIjoxNzE3NDM3MDAzLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.FzrfK1y4B6odNttdjDqqDCEs7_gbCv33iSM-deIQbbc"
    return (
        <div className="flex gap-5">
            <div>
                <h1>Video</h1>
                <video 
                    width="400" 
                    height="240" 
                    controls // نوار کنترل
                    preload="metadata" // شناسایی سایز ویدیو برای نمایش اولیه
                    playsInline	// برای IOS
                    autoPlay={false} // پخش بلافاصله ویدیو
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
            </div>

            
            <div>
                <h1>iframe</h1>
                <iframe
                    src={videSrc} 
                    width="400" 
                    height="240" 
                    // frameborder="0"
                    // allowfullscreen
                    loading="lazy"
                    title="Description"
                />
            </div>

        </div>
    )
}