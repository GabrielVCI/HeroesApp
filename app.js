const express = require("express");

const path = require("path");

const app = express();
const seq =require("./util/database");

const Heroes = require("./models/heroes");

const Races = require("./models/races");

const expressHandlebars = require("express-handlebars");

const heroesRouter = require("./routers/heroes");
const racesRouter = require("./routers/races");


const compare = require("./helpers/hbs/compare");

const ErrorController = require("./controllers/ErrorController");

app.use(express.urlencoded({extended: false}));

app.engine(  //Diciendo que las vistas a ejecutar sera de tipo hbs
    "hbs", 
    expressHandlebars(
        {layoutsDir: "views/layout/", 
        defaultLayout: "main-layout", 
        extname: "hbs",
        helpers: {
            equalValue: compare.equalValue,
        },
      })
          );

app.set("view engine", "hbs"); //setear la configuracion view engine y los archivos que va a setear seran de tipo hbs
app.set("views", "views"); //setear la ubicacion, diciendo que los views estan en la carpeta views

app.use(express.static(path.join(__dirname, "public")));

app.use(heroesRouter);
app.use(racesRouter);

app.use("/", ErrorController.GetNotFound);

Heroes.belongsTo(Races, {constraint: true, onDelete: "CASCADE"});

Races.hasMany(Heroes);

seq.sync().then(function(resultado){

    app.listen(12001); 

}).catch(err => {
    console.log(err);
});


