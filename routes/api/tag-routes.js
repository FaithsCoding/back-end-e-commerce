const router = require("express").Router();
//imports the models from the models directory
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

//this is a GET ROUTE method that retrieves the data from the server
router.get("/", (req, res) => {
  // uses the findAll() method to retrieve all tags which includes its associated product data
  Tag.findAll({
    attributes: ["id", "tag_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        through: ProductTag,
        as: "products",
      },
    ],
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // uses findOne() method to retrieve a single tage by its ID which includes its associated product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        through: ProductTag,
        as: "products",
      },
    ],
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res
          .status(404)
          .json({ message: "There was no tag found with this id." });
        return;
      }
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // uses the create() method to create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // uses update() method to update by it's ID
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => {
      if (!dbTagData[0]) {
        res
          .status(404)
          .json({ message: "There was no tag found for the id entered" });
        return;
      }
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // uses the destroy() method to delete by its ID
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res
          .status(404)
          .json({ message: "There was no tag found for the id entered" });
        return;
      }
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
