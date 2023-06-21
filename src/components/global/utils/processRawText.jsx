import React from "react";

export const processRawText = (cardText) => {
	let parts = cardText.split(/[%^ß]/);
	let processedText = parts.map((part, index) => {
		if (part === "") return null;
		if (index % 4 === 1) return <b key={index}>{part}</b>;
		if (index % 4 === 3) return <i key={index}>{part}</i>;
		if (index % 2 === 0) return <span key={index}>{part}</span>;
		return <br key={index} />;
	});
	return processedText;
};
