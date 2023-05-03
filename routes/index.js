// imports the router module from the Express package
const router = require("express").Router();

// imports the apiRoutes module
const apiRoutes = require("./api");

// defines the route for the API
router.use("/api", apiRoutes);

// defines a fallback route for any other routes that are not defined
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

// exports the router object for use in other modules
module.exports = router;
