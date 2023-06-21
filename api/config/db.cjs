require('dotenv').config();

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,

		});
		console.log("MongoDB connection SUCCESS!");
	} catch (err) {
		console.error(`MongoDB connection FAILED:\n ${err}`);
		process.exit(1);
	}
};
module.exports = connectDB;
