const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/recipes"
);

const recipeSeed = [
  {
    name: "Mock Chipotle Meal Prep",
    meal: "Lunch/Dinner",
    carbs: null,
    fats: null,
    protein: null,
    prep_time: "20 minutes",
    cook_time: "30-50 minutes",
    ingredients: [
      {
        name: "Chicken Breasts",
        amount: "1 1/2 lbs.",
        prepInstructions: "Cut so they are thin enough to cook through quickly on a skillet."
      },
      {
        name: "Beans (black or pinto)",
        amount: "12 oz.",
        prepInstructions: "Strained and dried."
      },
      {
        name: "Green Bell Pepper",
        amount: 1,
        metric: "pepper",
        prepInstructions: "Diced."
      },
      {
        name: "Red Bell Pepper",
        amount: "1 pepper",
        prepInstructions: "Diced."
      },
      {
        name: "Red Onion",
        amount: "3/4 cup",
        prepInstructions: "Chopped into large chunks."
      },
      {
        name: "Brown Rice",
        metric: "2 cups",
        prepInstructions: "Follow insturctions to cook normally."
      },
    ],
    instructions: [
      "Cut chicken longwise to make wider, thinner breasts to cook and blacken more easily.",
      "Put your preferred spice blend on the chicken and press it in firmly.",
      "Cook the rice according to the instructions on the container. Once finished, season however you like and add the beans.",
      "Allow the spices to sit on the chicken for 10 minutes.",
      "Put the choppend peppers and onions in a pot or skillet on low heat and cover. Cook, mixing occassionally, until the onions begin to become translucent. Once they are finished, remove from the heat and allow them to cool.",
      "Begin cooking the chicken on a greased skillet on medium heat. When the pieces are cooked on both sides, put them on a plate to be chopped later.",
      "Serve together on a plate or a bowl. Add cheese, avocado, and sour cream, or Greek yogurt as a healthier option, to taste."
    ],
    img_filename: null,
    serves: 5
  },
  {
    name: "Mac & Chili",
    meal: "Lunch/Dinner",
    carbs: null,
    fats: null,
    protein: null,
    prep_time: "10 minutes",
    cook_time: "30 minutes",
    ingredients: [
      {
        name: "Ground Beef or Turkey",
        amount: "1.5 lbs.",
        prepInstructions: null
      },
      {
        name: "Beans (black or pinto)",
        amount: "12 oz.",
        prepInstructions: "Strained and dried."
      },
      {
        name: "Green Bell Pepper",
        amount: "1 pepper",
        prepInstructions: "Diced."
      },
      {
        name: "Red Bell Pepper",
        amount: "1 pepper",
        prepInstructions: "Diced."
      },
      {
        name: "Red Onion",
        amount: "3/4 cup",
        prepInstructions: "Chopped into large chunks."
      },
      {
        name: "Beefsteak, Roma, or Similar Tomato",
        amount: "1 tomato",
        prepInstructions: "Diced."
      },
      {
        name: "Whole Grain or Quinoa Pasta",
        amount: "8 oz.",
        prepInstructions: "Follow insturctions to cook normally."
      },
      {
        name: "Chicken Stock",
        amount: "4 cups",
        prepInstructions: null
      },
      {
        name: "Chili Powder",
        amount: "1 1/2 tablespoon",
        prepInstructions: null
      },
      {
        name: "Cumin",
        amount: "1 tablespoon",
        prepInstructions: null
      },
      {
        name: "Paprika",
        amount: "1/2 tablespoon",
        prepInstructions: null
      },
      {
        name: "Corn Starch (optional)",
        amount: "As Needed",
        prepInstructions: "Add to the chili to make it thicker. Use sparingly - a lot goes a long way."
      }
    ],
    instructions: [
      "Add the chopped peppers and onions to a pot large enough to hold all of the ingrdients.",
      "Cook on low heat, covered, stirring occassionally, until the onions begin to become translucent.",
      "Once the vegetables are cooked, add the meat to the pot. Cook until most of the meat is brown. A little pink will be preferable as the food will continue to cook.",
      "Once the meat is cooked, add the chicken stock, beans, tomato, and spices to the mix. Stir and bring to a boil.",
      "After the chicken stock are boiling, add the pasta and leave uncovered.",
      "Cook for 12-15 minutes, or until the pasta is soft.",
      "Serve with cheddar cheese. Add avocado if you would like."
      ],
    img_filename: null,
    serves: 5
  }
];

db.Recipe
  .remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
