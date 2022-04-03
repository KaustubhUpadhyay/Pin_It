const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

const app = express();

dotenv.config();

app.use(express.json());

mongoose
  .connect("mongodb+srv://admin-kaustubh:hayday95@cluster0.pxqap.mongodb.net/pin?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 8800;

if(process.env.NODE_ENV == "production"){
  app.use(express.static("frontend/build"));
}

app.listen(PORT, () => {
  console.log("App is running");
});
