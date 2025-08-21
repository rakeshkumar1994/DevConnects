const express = require("express");
const validateRegister = require("../middlewares/validateRegister");
const { register, login } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", login);

module.exports = router;
