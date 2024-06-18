import localFont from 'next/font/local'
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


const myFont = localFont({ src: '../../assets/fonts/IRANSansWeb.woff' })

export default async function Error_Handling() {

  const sendNotification = async () => {
    "use server"

    fetch("http://localhost:3000//api/subscription", {method: "GET"})
    .then(data => console.log(data.json()))
    .catch(err => console.log(err))
  }

    return (
        <div>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                برای شروع کار با pwa باید پکیج زیر رو نصب کنیم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                npm i @ducanh2912/next-pwa
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                در ادامه باید کانفیگ های مربوط به فایل next.config.mjs رو انجام بدیم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                import withPWAInit from "@ducanh2912/next-pwa";

                const withPWA = withPWAInit({
                    cacheOnFrontEndNav: true, // درصورت فعال بودن بعد از بازدید کاربر از هر صفحه اطلاعات اون صفحه رو کش میکنه و برای بازدید بعدی سریعتر اطلاعات رو در اختیار کاربر میذاره
                    aggressiveFrontEndNavCaching: true, // اطلاعات هر صفحه را به صورت لحظه ای کش میکنه و برای صفحاتی که اطلاعاتشون زود تغییر میکنه بسیار کاربردیه
                    reloadOnOnline: true, // درصورت فعال بودن به محظ آنلاین شدن دستگاه بدون اینکه کاربر تغییری احساس کنه اطلاعات رو فچ میکنه و اطلاعات جدید رو نمایش میده
                    swcMinify: true, // جاوا اسکریپت را کوچک می کند: اندازه فایل های جاوا اسکریپت شما را با حذف کاراکترهای غیر ضروری (مانند فضای خالی، کامنت ها و غیره) بدون تغییر عملکرد آنها کاهش می دهد.
                    dest: "public", // برای تعیین فولدری که فایل های مربوط به pwa قرار داده شده. مثل manifest.json و server-worker.js
                    fallbacks: { // برای زمانی که اپ با ارور مواجه میشه یا آفلاینه میتونیم چیزهایی که میخوایم رو به کاربر نمایش بدیم
                      image: "/static/images/fallback.png",
                      document: "/offline", // if you want to fallback to a custom page rather than /_offline
                      font: '/static/font/fallback.woff2',
                      audio: ...,
                      video: ...,
                    },
                    disable: false, // برای غیر فعال کردن pwa
                    workboxOptions: {
                      disableDevLogs: true,
                    },
                    // ... other options you like
                  });


                /** @type {import('next').NextConfig} */
                const nextConfig = {};

                export default withPWA(nextConfig);
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                اقدام بعدی قرار دادن فایل manifest.json به همراه اطلاعات زیر در مسیری که مشخص کردیم و معمولا فولدر public هستش
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                {
                  "name": "My awesome PWA app",
                  "short_name": "PWA App",
                  "icons": [
                    {
                      "src": "/icon1.png",
                      "sizes": "125x125",
                      "type": "image/png"
                    },
                    {
                      "src": "/icon2.png",
                      "sizes": "256x256",
                      "type": "image/png"
                    },
                    {
                      "src": "/icon3.png",
                      "sizes": "512x512",
                      "type": "image/png"
                    }
                  ],
                  "theme_color": "#FFFFFF",
                  "background_color": "#FFFFFF",
                  "start_url": "/",
                  "display": "standalone",
                  "orientation": "portrait"
                }
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                حالا برای شناسایی فایل manifest توسط اپ باید آدرسش رو به فایل metadata در خارجی ترین layout بدیم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                export const metadata: Metadata = {
                  manifest: "/manifest.json",
                };
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                تا اینجا pwa قابل استفاده هستش و حتی در حالت آفلاین هم به صورت جزئی کار میکنه و ارور نمیده
              </div>
              <div>
                حالا بریم سراغ بخش جذاب ارسال اعلان برای کاربران
              </div>
              <div>
                برای ارسال اعلان باید از service worker استفاده کنیم
              </div>
              <div>
                برای اینکار یک فایل با هر اسمی که بخوایم با پسوند .js در فولدری که قبلا مشخص کردیم ، یعنی public میسازیم
              </div>
              <div>
                این service worker با استفاده از سوکت یک رابط بین سرور و کلاینت ایجاد میکنه و به صورت onTime و بلادرنگ اعلان هارو پوش میکنه
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {` 
                // service-worker.js

                // برای نصب سرویس مورد نظر
                self.addEventListener('install', () => {
                  console.log('service worker installed');
                });

                // برای فعال شدن سرویس مورد نظر
                self.addEventListener('activate', () => {
                  console.log('service worker activated');
                });

                // برای کش کردن صفحات هم برای باز شدن سریعتر صفحات و هم برای کار کردن در زمان آفلاین
                const cacheName = 'v1'
                const cacheClone = async (e) => {
                  const res = await fetch(e.request);
                  const resClone = res.clone();

                  const cache = await caches.open(cacheName);
                  await cache.put(e.request, resClone);
                  return res;
                };

                self.addEventListener('fetch', (e) => {
                  e.respondWith(
                    cacheClone(e)
                      .then((res) => res)
                      .catch(() => caches.match(e.request))
                  );
                });


                // برای پوش کردن به سمت کلاینت
                self.addEventListener('push',(event) => {
                  const data = event.data.json(); // اطلاعاتی که از سمت سرور میاد
                  const title = data.title;
                  if (Notification.permission === 'granted') {
                    event.waitUntil(
                      self.registration.showNotification(title, data)
                    );
                  }
                });


                // برای زمانی که روی اعلان کلیک شد
                self.addEventListener('notificationclick', function(event) {
                  const clickedNotification = event.notification;
                  clickedNotification.close();
                  
                  // Retrieve the URL from the notification data
                  const promiseChain = clients.openWindow(clickedNotification.data.url); // لینکی که از سمت سرور ارسال میشه برای باز شدن
                  event.waitUntil(promiseChain);
                });
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                سمت فرانت باید دوتا اقدام رو انجام بدیم
              </div>
              <div>
                اولین اقدام اینه که کلاینت رو به سرور بشناسونیم. یعنی باید subscription کلاینت رو بفرستبم برای سرور تا بدونه اعلان رو برای چه کلاینتی باید بفرسته
              </div>
              <div>
                برای اینکار از navigator استفاده میکنیم
              </div>
              <div>
                اقدام دوم دریافت اعلانات هستش که روی کد توضیح میدم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                "use client"
                import { useEffect } from "react";

                export default function Notification() {

                  useEffect(() => {
                    if ('serviceWorker' in navigator && 'PushManager' in window) {
                      navigator.serviceWorker.register('/service-worker.js') // آدرس فایل service-worker.js اینجا مشخص میکنیم تا کلاینت بهش متصل بشه
                        .then(registration => {
                          return registration.pushManager.subscribe({ // این کد هم برای دریافت اعلان ها استفاده میشه. البته برای دریافت اطلاعات کلاینت هم استفاده میشه
                            userVisibleOnly: true,
                            applicationServerKey: 'YOUR_PUBLIC_KEY' // این public key هستش که سمت سرور جنریت میشه. بعدا در موردش توضیح میدم
                          });
                        })
                        .then((subscription) => {  
                          fetch('/api/subscription', {
                            method: "POST",
                            body: JSON.stringify(subscription.toJSON()), // اینجا اطلاعت کلاین رو در یافت میکنیم و میفرستیم برای سرور تا کلاینت رو بشناسه
                            headers: {
                              "Content-Type": "application/json"
                            }
                          })
                          .then((data: any) => console.log(data.json()))
                          .catch((error: any) => console.log(error))
                        })
                        .catch(error => {
                          console.error('Service Worker registration failed:', error); 
                        });
                    }
                  }, []);

                  return <></>
                }
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                حالا لیست تمام کاربران که اطلاعاتشون ارسال میشه برای سرور رو باید تو دیتا بیش نگهداریم تا به موعق براشون اعلان بفرستیم
              </div>
              <div>
                در حال حاضر به دلیل ضروری نبودن کار با دیتا بیس من این کار رو با استفاده از یک کلاس سینگلتون انجام میدم
              </div>
              <div>
                یعنی لیستی از اطلاعات مربوط به هر کلاینتی که از سایت بازدید میکنه تو این کلاس سینگلتون نگهمیدارم
              </div>
              <div>
                اقدام دوم دریافت اعلانات هستش که روی کد توضیح میدم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                // server => /api/subscription

                import SUBSCRIPTION from "@/subscription/singletion";
                import { NextRequest } from "next/server";


                export async function POST(req: NextRequest) {
                    const data = await req.json()
                    SUBSCRIPTION.push(data)
                    const subscription = SUBSCRIPTION.getAll()
                    return Response.json(subscription)
                }



                // singleton class

                let AppDataInstance: any

                class SubscriptionSingleton {
                    value: any = [];
                    constructor() {
                        if (AppDataInstance) {
                          throw new Error("You can only create one instance!");
                        }
                        AppDataInstance = this;
                    }

                    push(newValue: any) {
                        const findEndPoint = this.value.find((ele: any) => ele.endpoint === newValue.endpoint)
                        if (!findEndPoint) this.value.push(newValue)
                    }

                    getAll() {
                        return this.value
                    }
                }

                const SUBSCRIPTION = new SubscriptionSingleton()

                export default SUBSCRIPTION;

              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                حالا رسیدیم به آخرین مرحله یعنی ارسال درخواست از سمت سرور
              </div>
              <div>
                در سرور برای ایجاد ارتباط با service worker از پکیج web-push استفاده میکنیم
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                npm install web-push --save
                npm i @types/web-push
              `}
          </SyntaxHighlighter>
          <br/>
          <h4 className={`text-lg ${myFont.className}`} dir="rtl">
              <div>
                برای ایجاد کردن این ارتباط نیاز به public key و private key داریم
              </div>
              <div>
                این کلیدها به دو صورت امکان ایجاد شدن دارن
              </div>
              <div>
                روش اول با استفاده از ترمینال هستش و با اجرای دستور
              </div>
              <div>
                روش دوم درواقع با استفاده از همین پکیج انجام میشه
              </div>
          </h4>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                // روش اول

                web-push generate-vapid-keys

                // روش دوم

                import webpush from "web-push";
                const generateVapidKeys = webpush.generateVAPIDKeys();
              `}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
              {`
                import SUBSCRIPTION from "@/subscription/singletion";
                import { draftMode } from "next/headers";
                import webpush from "web-push";

                export async function GET(request: Request) {
                    
                    const vapidKeys = {
                        publicKey: "PUBLIC_KEY",
                        privateKey: "PRIVATE_KEY",
                    };

                    webpush.setVapidDetails(
                        "mailto:miladgolinezhad73@gmail.com", 
                        vapidKeys.publicKey,
                        vapidKeys.privateKey
                    )
                    let subscriptions: any = SUBSCRIPTION.getAll()

                    const notificationPayload = {
                        title: "New Notification",
                        body: "This is a new notification",
                        icon: "icon.png",
                        image: "image.jpg",
                        badge: "image.jpg",
                        sound: "sound.ogg",
                        tag: "",
                        data: {
                          url: "http://localhost:3000",
                        //   primaryKey: "",
                          vibrate: true,
                          dir: "",
                          renotify: true,
                          requireInteraction: "",
                          silent: "",
                        //   timestamp: 1,
                          },
                    };

                    const options = {}

                    Promise.all(
                        subscriptions.map((subscription: any) =>
                          webpush.sendNotification(subscription, JSON.stringify(notificationPayload), options)
                        )
                    )
                    .then((data: any) => 
                        console.log({ message: data })
                    )
                    .catch((err: any) => {
                        console.error("Error sending notification", err);
                    });

                    const subscription = SUBSCRIPTION.getAll()

                    draftMode().enable()
                    return Response.json(subscription)
                }
              `}
          </SyntaxHighlighter>
          <br/>
          <form action={sendNotification}>
            <button className='m-5 bg-sky-400 hover:bg-sky-500 transition-all rounded-md p-3 text-gray-900'>Send Notification</button>
          </form>
        </div>
    )
}