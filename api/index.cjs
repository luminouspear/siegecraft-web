const express = require("express");
const cors = require("cors");
const cardRoutes = require("./routes/cardRoutes.cjs");
const path = require("path");
const connectDB = require("./config/db.cjs");
require("dotenv").config();

const app = express();

connectDB();

const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

//define paths
app.use("/api/cards", cardRoutes);

app.use(express.static(path.join(__dirname, "/build")));

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/build")));
	app.get("*", (req, res) => {
		res.sendFile(path.join("/app/build", "/index.html"));
	});
}

app.listen(PORT, function () {
	console.log("Server is running on port: ", PORT);
});
