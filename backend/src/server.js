const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Restaurant Backend Running 🚀");
});
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/menu", require("./routes/menu.routes"))


app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
