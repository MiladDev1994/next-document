import { Schema, model, models } from "mongoose";

const ClickSchema = new Schema({
    path: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

const Click = models.Click || model("Click", ClickSchema)

export default Click