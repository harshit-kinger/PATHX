const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

/*
========================
Middleware
========================
*/

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
});

/*
========================
Route Imports
========================
*/

const routeRoutes = require("./routes/routeRoutes");
const trafficRoutes = require("./routes/trafficRoutes");
const emergencyRoutes = require("./routes/emergencyRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

/*
========================
Root Route
========================
*/

app.get("/", (req, res) => {

    res.json({

        success: true,

        message: "Welcome to PATHX Backend API 🚀"

    });

});

/*
========================
API Routes
========================
*/

app.use("/api/routes", routeRoutes);

app.use("/api/traffic", trafficRoutes);

app.use("/api/emergency", emergencyRoutes);

app.use("/api/analytics", analyticsRoutes);

/*
========================
Server
========================
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`✅ PATHX Backend running on port ${PORT}`);

});