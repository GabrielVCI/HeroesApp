const Races = require("../models/races");

exports.GetRacestList = (req, res, next) => {

    Races.findAll().then((result) =>{

        console.log(result);

        const races = result.map((result) => result.dataValues); //Siempre hay que hacerla cada vez que queramos un listado de los datos
        res.render("races/races-list", 
        {pageTitle: "RAZAS",
        races: races,
          });

    }).catch((err) => {

    });


};

exports.GetCreateRaces = (req, res, next) => {

    res.render("races/save-races", {pageTitle: "CREATE RACES", racesActive: true, editMode: false});
};

exports.PostCreateRaces = (req, res, next) => {
    const name = req.body.Name;

    Races.create({name: name}).then(result => {
        res.redirect("/");

    }).catch(err => {
        console.log(err)
    })

};


exports.GetEditRaces = (req, res, next) => {

    const edit = req.query.edit;
    const RacesId = req.params.racesId;

    if(!edit){

        return res.redirect("/races");

    }  
    Races.findOne({ where: {id: RacesId} }).then((result) =>{
        const race = result.dataValues;
        if(!race){
            return res.redirect("/races");
        }
        console.log(race);
        res.render("races/save-races", 
        {pageTitle: "Edit Races", 
        racesActive: true, 
        editMode:edit,
        race: race});

    }).catch((err) => {
        console.log(err);
    });
 
};

exports.PostEditRaces = (req, res, next) => {

    const name = req.body.Name;

    const raceId = req.body.raceId;
    Races.update(
    { name: name },
    { where: { id: raceId } }
  )
    .then((result) => {
      return res.redirect("/races");
    })
    .catch((err) => {
      console.log(err);
    });

};


exports.PostDeleteRaces = (req, res, next) => {
 
    const id = req.body.raceId;
  
    console.log(id);

    Races.destroy({where: {id: id}}).then((result) => {return res.redirect("/races");}).catch((err) => {console.log(err);})
  

};
