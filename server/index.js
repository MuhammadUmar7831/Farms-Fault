import express from "express";
import connectDB from "./db.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Hello World" });
});

// app.use("/api/auth", authRouter);

// following route run when a route call next and no one is there to listen
// the route will call errorHandler that will create a custom error and pass the error to this
app.use((err, req, res, next) => {
  const message = err.message || "Internal server error";
  res.status(500).send({
    success: false,
    message,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
