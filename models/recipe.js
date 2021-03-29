const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ingredientSchema } = require("./ingredient"); // ingredients schema

const recipeSchema = new Schema({
  name: { type: String, required: true },
  meal: { type: String, required: true }, // breakfast, lunch, dinner, dessert, snack
  carbs: { type: Number }, // in grams
  fats: { type: Number }, // in grams
  protein: { type: Number }, // in grams
  prep_time: { type: String }, // time formatted hh:mm
  cook_time: { type: String }, // time formatted hh:mm
  ingredients: [{ type: ingredientSchema, required: true }], // array of ingredients
  instructions: [{ type: String, required: true }], // array of strings
  img_filename: { type: String, required: true }, // image file name in the public/images directory
  serves: { type: Number, required: true }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
