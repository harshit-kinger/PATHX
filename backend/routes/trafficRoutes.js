const express = require("express");

const router = express.Router();

const {
    getTraffic
} = require("../controllers/trafficController");

const {
    getTrafficHeatmap
} = require("../controllers/trafficHeatmapController");

router.get("/", getTraffic);

router.get("/heatmap", getTrafficHeatmap);

module.exports = router;