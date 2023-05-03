//imports the router module from the express package
const router = require("express").Router();
//imports the categoryRoutes, productRoutes and tagRoutes modules.
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

//defines the routes by using the imported modules
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

//exports the router object so it can be used globally in other modules.
module.exports = router;
