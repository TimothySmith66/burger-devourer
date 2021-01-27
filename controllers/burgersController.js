// express dependency
const express = require('express');
const burgersJs = require('../models/burger.js');
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burgersJs.all((data) => {
    const handlebrsObject = {
      burgers: data,
    };
    console.log(handlebrsObject);
    res.render("index", handlebrsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burgersJs.create({ name: req.body.name, devoured: req.body.devoured }, (result) => {
    res.json({ id: result.insertId });
  });
});

// using put to replace the value of devoured burger f
router.put("/api/burgers/:id/devoured", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: req.body.value };

  burgersJs.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were affected
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;