import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

// import recipes from "recipes.json" assert {type: 'json'};

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
        try {
            const data = await fs.readFile(fileName, 'utf-8');
            const jsonData = JSON.parse(data);
            return jsonData;
        } catch (error) {
            console.error('Error reading file:', error);
        }
}

// GET A RECIPE BY ID
export async function getRecipeByID(requestId) {
    try {
        const data = await fs.readFile(fileName, 'utf-8');
        const jsonData = JSON.parse(data);
        {
            const index = jsonData.findIndex(({ id }) => id === requestId);
            if (index === -1) {
            return { success: false, data: null };
        }
        {
            return { success: true, data: jsonData[index]};
        }
    }
    } catch (error) {
        console.error('Error reading file:', error);
    }
}


// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
