import React from "react";

export const getAffiliation = (affiliation, elementID) => {
	let result = [];
	// console.log(elementID)
	for (let i = 0; i < affiliation; i++) {
		result += elementID;
	}

	return <>{result}</>;
};
