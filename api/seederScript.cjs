const cardData = require("./data/cards.cjs");
const connectDB = require("./config/db.cjs");
const Card = require("./models/Card.cjs");

connectDB();

const importData = async () => {
	try {
		await Card.deleteMany({});
		await Card.insertMany(cardData);

		console.log("Data imported successfully");

		process.exit();
	} catch (err) {
		console.error(`Error with data import\n${err}`);
		process.exit(1);
	}
};

importData();
