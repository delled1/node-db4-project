exports.seed = function(knex) {

    return knex("ingredients").del()
    .then(function() {
    return knex("ingredients").insert([
        { name: "egg" },
        { name: "1 oz shredded cheddar cheese" },
        { name: "pinch of salt" },
        { name: "pinch of pepper" },
        { name: "1 tbs of butter" },
        { name: "bacon slice" },
        { name: "lettuce" },
        { name: "tomato" },
        { name: "bread slice" },
        { name: "1 tbs mayonnaise" }

    ])})
}