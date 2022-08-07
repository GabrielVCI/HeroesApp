const Heroes = require("../models/heroes");

const Races = require("../models/races");

exports.GetHeroestList = (req, res, next) => {

    Heroes.findAll({include: [{model: Races}]}).then((result) =>{

        console.log(result);
 
        const heroes = result.map((result) => result.dataValues); //Siempre hay que hacerla cada vez que queramos un listado de los datos
 
        res.render("heroes/heroes-list", 
        {pageTitle: "HEROES",
        heroes: heroes,
        homeActive: true,
        hasHeroes: heroes.length > 0
          });

    }).catch((err) => {

    });


};

exports.GetCreateHeroes= (req, res, next) => {

    Races.findAll().then((result) => {


        const races = result.map((result) => result.dataValues);
        res.render("heroes/save-heroes", 
        {pageTitle: "CREATE HEROES", 
        homeActive: true, 
        editMode:false,
        races: races,
        hasRaces: races.length > 0 
        });

    }).catch((err) => {
        console.log(err)
    });

    
};

exports.PostCreateHeroes= (req, res, next) => {
    const name = req.body.Name;
    const description = req.body.Description;
    const heroesRaces = req.body.Races;

    Heroes.create({name: name, description: description, razaId: heroesRaces}).then(result => {
        res.redirect("/");

    }).catch(err => {
        console.log(err)
    })

};


exports.GetEditHeroes= (req, res, next) => {

    const edit = req.query.edit;
    const heroesId = req.params.heroesId;

    Heroes.findOne({ where: {id: heroesId}, include: [{model: Races}] }).then((result) =>{

        const hero = result.dataValues;

    if(!hero){

        return res.redirect("/");

    }

  
    Races.findAll().then((result) => {


        const races = result.map((result) => result.dataValues);
        res.render("heroes/save-heroes", 
        {pageTitle: "Edit heroes", 
        homeActive: true, 
        editMode:edit,
        hero: hero,
        races: races,
        hasRaces: races.length > 0
        });

        }).catch((err) => {
            console.log(err)
        });

    }).catch((err) => {
        console.log(err);
    });
 
};

exports.PostEditHeroes = (req, res, next) => {

    const name = req.body.Name;
    const description = req.body.Description;
    const heroesRaces = req.body.Races;

    const heroId = req.body.heroId;
  Heroes.update(
    { name: name, description: description, razaId: heroesRaces},
    { where: { id: heroId } }
  )
    .then((result) => {
      return res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });

};
exports.PostDeleteHeroes = (req, res, next) => {

    const id = req.body.heroesId;
    console.log(id);
    Heroes.destroy({where: {id: id}}).then((result) => {return res.redirect("/");}).catch((err) => {console.log(err);})

};
