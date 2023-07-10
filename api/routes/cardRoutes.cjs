const express = require("express");
const router = express.Router();
require("dotenv").config();

const { getCards, getCardById } = require("../controller/cardController.cjs");

router.get("/", getCards);

router.get("/:id", getCardById);

module.exports = { router };
