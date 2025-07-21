const express = require("express")
const router = express.Router();
const {login , sign} = require("../Controller/userController");

router.post("/login", login )
router.post("/sign_up",sign)

module.exports = router;