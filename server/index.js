import express from "express";
import connectDB from "./db.js";
// import authRouter from "./routes/auth.route.js";
// import errorRouter from "./routes/errorReport.route.js";
import dashboardRouter from "./routes/dashboard.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Hello World" });
});

// app.use("/api/auth", authRouter);
// app.use("/api/error", errorRouter);
app.use("/api/dashboard", dashboardRouter);

app.use((err, req, res, next) => {
  const message = err.message || "Internal server error";
  res.status(500).send({
    success: false,
    message,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));