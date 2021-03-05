exports.seed = function(knex) {

    return knex("recipes_ingredients").del()
    .then(function() {
    return knex("recipes_ingredients").insert([

        { recipes_id: 1, ingredients_id: 1, ingredients_quantity: 2 },
        { recipes_id: 1, ingredients_id: 2, ingredients_quantity: 2 },
        { recipes_id: 1, ingredients_id: 3, ingredients_quantity: 1 },
        { recipes_id: 1, ingredients_id: 4, ingredients_quantity: 1 },
        { recipes_id: 1, ingredients_id: 5, ingredients_quantity: 1 },

        { recipes_id: 2, ingredients_id: 6, ingredients_quantity: 6 },
        { recipes_id: 2, ingredients_id: 7, ingredients_quantity: 1 },
        { recipes_id: 2, ingredients_id: 8, ingredients_quantity: 1 },
        { recipes_id: 2, ingredients_id: 9, ingredients_quantity: 2 },
        { recipes_id: 2, ingredients_id: 10, ingredients_quantity: 2 },

    ])})
}
