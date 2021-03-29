const db = require("../models");

// Defining methods for the RecipesController
module.exports = {
  findAll: function(req, res) {
    db.Recipe
      .find(req.query)
      .sort({ id: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Recipe
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Recipe
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Recipe
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Recipe
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.Recipe
      .find({
        $or: [
        { name: /${req.params.name}/ },
        { 'ingredient.name': /${req.params.name}/ }
      ]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByMeal: function(req, res) {
    db.Recipe
      .find({ meal: /${req.params.meal}/ })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
