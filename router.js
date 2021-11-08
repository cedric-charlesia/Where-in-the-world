const { response } = require("express");
const express = require("express");
const router = express.Router();

const controller = require('./controllers/controllers.js')

router.get("/", controller.home);

router.get("/search", controller.search);

router.get("/random-countries", controller.randomCountries);

router.get("/continent/:continentName", controller.continent);

router.get("/country/:countryName", controller.country);

router.use((resquest, response, next) => {
  response.render("404.ejs");
});

module.exports = router;
