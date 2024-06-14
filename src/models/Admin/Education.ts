import { Schema, model, models } from "mongoose";

const EducationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    academy: {
        type: String,
        required: true,
    },
    headline: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const Education = models.Education || model("Education", EducationSchema)

export default Education;