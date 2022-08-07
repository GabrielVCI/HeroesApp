const Sequelize = require("sequelize");

const seq = require("../util/database");



const Races = seq.define("razas" /*Nombre de la tabla*/,
                          {id: { 
                              type: Sequelize.INTEGER,
                              autoIncrement: true,
                              allowNull: false,
                              primaryKey: true,
                          },
                           name: {
                               type: Sequelize.STRING,
                               allowNull: false,
                           }
                        });
module.exports = Races;