import mongoose from "mongoose";
const errorEnumSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        points: {
            type: number,
            required: true,
        }
    }
);

const ErrorEnum = mongoose.model("ErrorEnum", errorEnumSchema);

export default ErrorEnum;