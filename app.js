const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const productRoutes = require("./routes/productRoutes");
const port = process.env.PORT || 3000;

app.use(express.json());

// Enable CORS
app.use(cors());
app.use("/api", productRoutes);
// Connect to MongoDB.
mongoose
  .connect(
    "mongodb+srv://hsing720:fygq6l1GN0qqF3oJ@cluster0.z9fveqk.mongodb.net/Marketplace?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Sample route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to DressStore application." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
