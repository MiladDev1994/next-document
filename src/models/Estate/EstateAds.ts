import {Schema, model, models} from "mongoose";

const adsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "EstateUser",
    },
    subject: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    real_state: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["villa", "apartment", "shop", "office"],
        required: true
    },
    options: {
        type: Array,
    },
    rules: {
        type: Array,
    },
    imageName: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false,
    }

},
    {timestamps: true}
)

const AdsEstate = models.AdsEstate || model("AdsEstate", adsSchema)

export default AdsEstate;