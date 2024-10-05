import mongoose from "mongoose";

const errorSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["Pest", "Fertilizers", "Disease", "Weather", "Irrigation"], // nogotiate
      required: true,
    },
    photos: {
      type: [String],
      required: true, // nogotiate
    },
    description: {
      type: String,
      required: true,
    },
    // timestamp: {
    //   type: Date,
    //   default: Date.now,
    //   required: true,
    // },
    points: {
      type: Number,
      required: true,
    },
    location: {
      longitude: {
        type: Number,
        required: true,
      },
      latirude: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Error = mongoose.model("Error", errorSchema);

export default Error;