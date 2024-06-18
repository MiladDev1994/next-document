"use client"
import { useEffect } from "react";

export default function Notification() {

    
  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
        //   console.log('Service Worker registered with scope:', registration.scope);
          return registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'BI8MQKmPxnZy46R8EMgkss-n_9W26anESofwkAMjC3QG022hTL3-KqSAX4ntN1rYWnkylvu0DJefq8S8UTMFzFE' 
          });
        })
        .then((subscription) => {  
          // const {endpoint, expirationTime, keys: {auth, p256dh}}: any = subscription.toJSON()
          fetch(`/api/subscription`, {
            method: "POST",
            body: JSON.stringify(subscription.toJSON()),
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