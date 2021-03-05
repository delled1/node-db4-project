exports.seed = async function(knex) {
    await knex("steps").insert([
        { step_number: 1, instructions: "Place pan on medium-low heat", recipe_id: 1},
        { step_number: 2, instructions: "Melt butter in pan", recipe_id: 1},
        { step_number: 3, instructions: "Scramble eggs and put into pan", recipe_id: 1},
        { step_number: 4, instructions: "Add cheese", recipe_id: 1},
        { step_number: 5, instructions: "Serve", recipe_id: 1},


        { step_number: 1, instructions: "Cook bacon", recipe_id: 2},
        { step_number: 2, instructions: "Wash lettuce and tomato", recipe_id: 2},
        { step_number: 3, instructions: "Slice tomato", recipe_id: 2},
        { step_number: 4, instructions: "Layer sandwhich with mayo, bacon, lettuce, tomato", recipe_id: 2},
        { step_number: 5, instructions: "Serve", recipe_id: 2},

    ])
}