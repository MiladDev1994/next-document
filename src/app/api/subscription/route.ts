import SUBSCRIPTION from "@/subscription/singletion";
import { draftMode } from "next/headers";
import { NextRequest } from "next/server";
import webpush from "web-push";


export async function POST(req: NextRequest) {
    const data = await req.json()
    SUBSCRIPTION.push(data)
    const subscription = SUBSCRIPTION.getAll()
    // draftMode().enable()
    return Response.json(subscription)
}

export async function GET(request: Request) {
    
    const generateVapidKeys = webpush.generateVAPIDKeys();

    const vapidKeys = {
        publicKey: "BI8MQKmPxnZy46R8EMgkss-n_9W26anESofwkAMjC3QG022hTL3-KqSAX4ntN1rYWnkylvu0DJefq8S8UTMFzFE",
        privateKey: "LqHtY1YRPPFB0U33me0yR-WQChw8kMLpyqlWtLQekOE",
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