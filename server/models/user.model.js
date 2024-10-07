import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minlength: [3, "First name must be at least 3 characters long"], // Min length validation
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [3, "Last name must be at least 3 characters long"], // Min length validation
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); 
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    dob: {
      type: String,
      required: [true, "Date of birth is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    avatar: {
      type: String,
      default: "/avatar.jpg",
      required: [true, "Avatar is required"],
    },
  },
  { timestamps: true }
);

userSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    // Check for duplicate key error (code 11000)
    next(new Error("Email already registered."));
  } else {
    next(error); // Forward other errors
  }
});

// Create and export the User model
const User = mongoose.model("User", userSchema);

export default User;