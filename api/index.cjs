const express = require("express");
const cors = require("cors");
const { router } = require("./routes/cardRoutes.cjs");
const path = require("path");
const connectDB = require("./config/db.cjs");
require("dotenv").config();

const app = express();

connectDB();

const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

app.use("/api/cards", (req, res, next) => {
	const apiKey = req.headers["x-api-key"];

	if (!apiKey || apiKey !== process.env.VITE_REACT_APP_ACCESS_TOKEN) {
		res.status(403).json({ error: "Unauthorized access" });
	} else {
		next();
	}
});

//define paths
app.use("/api/cards", router);

app.use(express.static(path.join(__dirname, "dist")));

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "dist")));
	// Return the main index.html file for all other requests
	app.get("/*", (req, res) => {
		res.sendFile(path.join(__dirname, "dist", "index.html"));
	});
}

app.listen(PORT, function () {
	console.log("Server is running on port: ", PORT);
});
