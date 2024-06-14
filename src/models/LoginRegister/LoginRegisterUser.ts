import {Schema, model, models} from "mongoose";

const userSchema = new Schema({
    type: {
        type: String,
        default: "default"
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: ""
    },
    createAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
})

const LoginRegisterUser = models.LoginRegisterUser || model("LoginRegisterUser", userSchema);
export default LoginRegisterUser;
