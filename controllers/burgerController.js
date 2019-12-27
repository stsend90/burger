var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.all(function(data) {
        var burgersData = {
        burgers: data
    };
    console.log(burgersData);
    res.render("index", burgersData);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", 
    ], [
      req.body.name, 
    ], function(result) {
      res.redirect("/burgers");
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
       devoured: "true"
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
module.exports = router;