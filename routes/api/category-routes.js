const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    //when the db is successful it sends a JSON response with the data to the client using res.json.
    //We use catch to catch any errors and console log them
    //We have used a HTTP 500, to send a JSON response to the client showing if a server error occured
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    //when the db is successful it sends a JSON response with the data to the client using res.json.
    //We use an if statement to allow for a 404 error and return a repsonse to the user
    //We use catch to catch any errors and console log them
    //We have used a HTTP 500, to send a JSON response to the client showing if a server error occured
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({
          message:
            "We have not found a category for this id, please try again.",
        });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
