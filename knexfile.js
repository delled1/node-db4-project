// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/recipies.db3'
    },

    migrations: {
      directory: './data/migrations'
    },

    seeds: {
      directory: './data/seeds'
    },

    //For foreign keys
    pool: {
      
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        // turn on FK enforcement
        conn.run("PRAGMA foreign_keys = ON", done)
      }

    }
  },




};
