exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('users', table => {
      table.increments('id').primary
      table.string('user_name')
      table.string('hash')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
  };