import { Schema, model, models } from "mongoose";

const SkillSchema = new Schema({
    icon: {
        type: String,
        require: true,
    },
    course: {
        type: String,
        require: true,
    },
    score: {
        type: Number,
        require: true,
    },
    sort: {
        type: Number,
        require: true,
    },
}, {
    timestamps: true
})

const Skill = models.Skill || model("Skill", SkillSchema);

export default Skill;
