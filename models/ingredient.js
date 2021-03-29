const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: String, required: true },
  prepInstructions: { type: String } // diced, chopped, etc.
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = {
  Ingredient,
  ingredientSchema
};
