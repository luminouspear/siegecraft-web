const dotenv = require("dotenv");

const NODE_ENV = process.env.NODE_ENV || "development";

if (NODE_ENV === "development") {
	const envFile = ".env.development";
	const result = dotenv.config({ path: envFile });

	if (result.error) {
		throw result.error;
	}

	console.log(`Environment variables loaded from ${envFile}`);
} else {
	console.log(
		`Running in production mode with environment variables from process.env`
	);
}
