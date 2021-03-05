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

module.exports = router