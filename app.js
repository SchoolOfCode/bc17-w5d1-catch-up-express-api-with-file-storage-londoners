import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

app.get("/recipes", async (req,res) => {
  res.send(await getRecipes());
})

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
