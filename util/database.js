const Sequelize = require("sequelize");

const seq = new Sequelize('HeroesApp', 'sa', 'Gabriel1708222612',{
    host: 'localhost',
    dialect: "mssql"
  });

module.exports =  seq;
