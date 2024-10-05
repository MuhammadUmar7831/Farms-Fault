import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import authRouter from "./routes/auth.route.js";
import errorRouter from "./routes/errorReport.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Hello World" });
});

app.use("/api/auth", authRouter);
app.use("/api/error", errorRouter);

// following route run when a route call next and no one is there to listen
// the route will call errorHandler that will create a custom error and pass the error to this
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).send({
    success: false,
    message,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
