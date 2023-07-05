const { Pool } = require('pg');
const { db } = require('./config');

const pool = new Pool(db);

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
</new_file>
