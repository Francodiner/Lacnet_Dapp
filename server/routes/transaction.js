const express = require("express");
const router = express.Router();
const { validateFields } = require("../middlewares/validator");
const { check } = require("express-validator");

const { signTransaction } = require("../controllers/transaction");

router.post(
  "/sign",
  [
    check("from", "from is required").not().isEmpty(),
    check("to", "from is required").not().isEmpty(),
    check("gas", "from is required").not().isEmpty(),
    check("data", "from is required").not().isEmpty(),
    validateFields,
  ],
  signTransaction
);

module.exports = router;
