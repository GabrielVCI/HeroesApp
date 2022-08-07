exports.GetNotFound = (req, res,next) => {

    res.status(404).render("layout/404", {pageTitle: "Not Found"});
};