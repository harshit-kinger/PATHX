const express = require("express");

const router = express.Router();

const {
    getEmergencyStatus
} = require("../controllers/emergencyController");

router.get("/", getEmergencyStatus);

module.exports = router;