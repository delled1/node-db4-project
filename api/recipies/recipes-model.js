const db = require("../../data/config");
const router = require("./recipes-router");

// - `getRecipes()`: should return a list of all recipes in the database.

function getRecipes() {

    return db("recipes")
    .select("*")

}

// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe

function getShoppingList(recipe_id) {
    
    return db("recipes_ingredients as r")
    .select("r.recipes_id", "i.name as ingredient", "r.ingredients_quantity")
    .where("recipes_id", recipe_id)
    .join("ingredients as i", "i.id", "r.ingredients_id")
  
}

// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

function getInstructions(recipe_id) {

}

module.exports = {
    getRecipes,
    getShoppingList
}