const express = require("express");
const router = express.Router();

const { getCards, getCardById } = require("../controller/cardController.cjs")


router.get("/", getCards);

router.get("/:id", getCardById);

module.exports = router;
