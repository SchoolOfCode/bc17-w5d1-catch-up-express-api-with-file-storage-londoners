import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

import recipes from "recipes.json" assert {type: 'json'};

const app = express();
const PORT = 3000;

app.get("/recipes", async (req,res) => {
  res.send(await getRecipes());
  
})

app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
