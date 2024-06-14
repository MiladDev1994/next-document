import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "USER"
    },
    createAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
})

const EstateUser = models.EstateUser || model("EstateUser", userSchema)

export default EstateUser;