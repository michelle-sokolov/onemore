const router = require("express").Router();
const itemsRoutes = require("./shopall");

// Book routes
router.use("/shopall", itemsRoutes);

module.exports = router;