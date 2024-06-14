import localFont from 'next/font/local'
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism';


const myFont = localFont({ src: '../../../../assets/fonts/IRANSansWeb.woff' })

export default function Error_Handling() {
    return (
        <div>
            <div>
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        وقتی چنتا عملایت واکشی دیتا از سرور رو داریم که به هم وابسته هستن میتونیم از Promise.all() استفاده کنیم
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                       import Albums from './albums'
 
                       async function getArtist(username: string) {
                         const res = await fetch('https://api.example.com/artist/usernam')
                         return res.json()
                       }
                        
                       async function getArtistAlbums(username: string) {
                         const res = await fetch('https://api.example.com/artist/username/albums')
                         return res.json()
                       }
                        
                       export default async function Page({
                         params: { username },
                       }: {
                         params: { username: string }
                       }) {
                         // Initiate both requests in parallel
                         const artistData = getArtist(username)
                         const albumsData = getArtistAlbums(username)
                        
                         // Wait for the promises to resolve
                         const [artist, albums] = await Promise.all([artistData, albumsData])
                        
                         return (
                           <>
                             <h1>{artist.name}</h1>
                             <Albums list={albums}></Albums>
                           </>
                         )
                       }
                    `}
                </SyntaxHighlighter>

                <br/>
                
                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        از یه روش دیگه ای هم بار یانکار میتونیم استفاده کنیم به اسم Preload Data که فعلا چیزی ازش نمیفهمم
                    </div>
                </h4>

                <br/>

                <h4 className={`text-lg ${myFont.className}`} dir="rtl">
                    <div>
                        اگر بخوایم یه سری از کلید ها و اطلاعات رو از دیتا واکشی شده حذف کنیم و سمت کلاینت نفرستیم میتونیم از توابع experimental_taintObjectReference و experimental_taintUniqueValue استفاده کنیم
                    </div>
                </h4>
                <SyntaxHighlighter language="javascript" style={styles.tomorrow}>
                    {`
                       import { queryDataFromDB } from './api'
                       import {
                         experimental_taintObjectReference,
                         experimental_taintUniqueValue,
                       } from 'react'
                        
                       export async function getUserData() {
                         const data = await queryDataFromDB()
                         experimental_taintObjectReference(
                           'Do not pass the whole user object to the client',
                           data
                         )
                         experimental_taintUniqueValue(
                           "Do not pass the user's address to the client",
                           data,
                           data.address
                         )
                         return data
                       }





                        import { getUserData } from './data'
 
                        export async function Page() {
                        const userData = getUserData()
                            return (
                                <ClientComponent
                                    user={userData} // this will cause an error because of taintObjectReference
                                    address={userData.address} // this will cause an error because of taintUniqueValue
                                />
                            )
                        }
                    `}
                </SyntaxHighlighter>

                <br/>
                
                
            </div>
        </div>
    )
}