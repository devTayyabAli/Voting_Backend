const express = require("express");
const bodyParser = require("body-parser");
const { register, LogIn } = require("../controller/userController");

// import router

const router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.route("/register").post(register)
router.route("/LogIn").post(LogIn)

module.exports = router;