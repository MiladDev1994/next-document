import { Schema, model, models } from "mongoose";

const HomeSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        required: true
    },
},
{
    timestamps: true
})

const AdminHome = models.AdminHome || model("AdminHome", HomeSchema)

export default AdminHome;