import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

// import recipes from "recipes.json" with {type: 'json'};

const app = express();
const PORT = 3000;

// task 1
app.get("/recipes", async (req,res) => {
  res.send(await getRecipes());
  
})

// task 2
app.get("/recipes/:id", async (req,res) => {
  res.send(await getRecipeByID(req.params.id));
  
})


app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
