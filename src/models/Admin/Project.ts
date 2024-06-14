import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
    logoName: {
        type: String,
        require: true,
    },
    logoColor: {
        type: String,
        require: true,
    },
    score: {
        type: String,
        require: true,
    },
    about: {
        type: Array,
        require: true,
    },
    sort: {
        type: Number,
        require: true,
    }
}, {
    timestamps: true,
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;