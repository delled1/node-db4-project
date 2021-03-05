const express = require("express")
const recipes = require("./recipes-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
        const recipe = await recipes.getRecipes()
        res.json(recipe)
    } catch(err){
        next(err)
    }
})

router.get("/:id/shoppinglist", async (req, res, next) => {
    try{

        const recipe = await recipes.getShoppingList(req.params.id)
        res.json(recipe)

    } catch(err){
        next(err)
    }
})

router.get("/:id/instructions", async (req, res, next) => {
    try{

        const instruction = await recipes.getInstructions(req.params.id)
        res.json(instruction)

    } catch(err){
        next(err)
    }
})

module.exports = router