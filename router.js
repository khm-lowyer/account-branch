const express = require("express");
const router = express.Router();

router.route("/").get((req,res)=>{
res.send("router is working");
});

module.exports = router;
