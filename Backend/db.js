const { MongoClient } = require("mongodb");

let serverConnection;
module.exports = {
  connectTodb: (cb) => {
    MongoClient.connect("mongodb://localhost:27017/Revice").then((value) => {
      serverConnection = value.db();
      return cb();
    });
  },
  getData: () => serverConnection,
};
