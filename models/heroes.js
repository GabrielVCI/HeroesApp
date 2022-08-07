const Sequelize = require("sequelize");

const seq = require("../util/database");



const Heroes = seq.define("heroes" /*Nombre de la tabla*/,
                          {id: { 
                              type: Sequelize.INTEGER,
                              autoIncrement: true,
                              allowNull: false,
                              primaryKey: true,
                          },
                           name: {
                               type: Sequelize.STRING,
                               allowNull: false,
                           },
                            
                           description: {
                               type: Sequelize.STRING,
                               allowNull: false,
                           }
                        });
module.exports = Heroes;