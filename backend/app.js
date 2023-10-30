const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectToDb = require("./configs/db");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));

app.use("/api/v1/posts", require("./routes/posts.route"));
app.use("/api/v1/user", require("./routes/users.route"));

connectToDb();

app.listen("8888", () => {
  console.log(`listening on port ${PORT}`);
});
