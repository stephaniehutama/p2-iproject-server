// config("dotenv");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const router = require("./routes/index");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Movie Rental app listening on port ${port}`);
});
