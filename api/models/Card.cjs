const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
	cardID: {
		type: String,
	},
	cardName: {
		type: String,
	},
	superType: {
		type: String,
		required: false,
	},
	type: {
		type: String,
	},
	subType: {
		type: String,
		required: false,
	},
	cardElement: {
		type: String,
	},
	manaCost: {
		type: String,
		required: false,
	},
	cardText: {
		type: String,
		required: false,
	},
	cardElementalAffiliation: {
		type: String,
		required: false,
	},
	strength: {
		type: Number,
		required: false,
	},
	defense: {
		type: Number,
		required: false,
	},
	manaProduced: {
		type: String,
		required: false,
	},
	territoryDefense: {
		type: Number,
		required: false,
	},
	flavorText: {
		type: String,
		required: false,
	},
	imageUrl: {
		type: String,
	},
	imageAltText: {
		type: String,
	},
	elementID: {
		type: String,
	},
	cardNumber: {
		type: Number,
	},
	rarity: {
		type: String,
	},
	deckbuildingPoints: {
		type: Number,
	},
	cardImage: {
		type: String,
	},
	set: {
		type: String,
	},
	subSet: {
		type: String,
	},
	copyrightText: {
		type: String,
	},
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
