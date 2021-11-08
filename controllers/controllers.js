const countries = require("../modules/countries.json");

const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);

let currentTime = dayjs();

const controller = {
  home: (request, response) => {
    response.render("index.ejs", {
      countryList: countries,
      currentTime
    });
  },
  search: (request, response) => {
    const inputCountry = request.query.country;

    const filteredCountry = countries.filter((country) => {
      const searchedCountry = country.name.toLowerCase();
      return searchedCountry.includes(inputCountry);
    });
    if (filteredCountry[0] === undefined) {
      response.render("404-search.ejs");
    } else {
      response.render("search.ejs", { 
        countryList: filteredCountry,
        currentTime
       });
    }
  },
  randomCountries: (request, response) => {
    response.render("random-countries.ejs", {
      countryList: countries,
      currentTime
    });
  },
  country: (request, response) => {
    const selectedCountry = request.params.countryName;
  
    let foundCountry;
  
    for (const country of countries) {
      if (selectedCountry === country.name.toLowerCase()) {
        foundCountry = country;
      }
    }
  
    if (foundCountry) {
      response.render("country.ejs", { 
        country: foundCountry,
        currentTime });
    } else {
      response.render("404.ejs");
    }
  },
  continent: (request, response) => {
    const africanCountries = countries.filter((country) => {
      if (country.region === "Africa")
      return country;  
    });
    const americanCountries = countries.filter((country) => {
      if (country.region === "Americas")
      return country;  
    });
    const asianCountries = countries.filter((country) => {
      if (country.region === "Asia")
      return country;  
    });
    const europeanCountries = countries.filter((country) => {
      if (country.region === "Europe")
      return country;  
    });
    const oceanianCountries = countries.filter((country) => {
      if (country.region === "Oceania")
      return country;  
    });
  
    if (request.url === "/continent/africa") {
      response.render("african-countries.ejs", {
        countryList: africanCountries,
        currentTime
      });
    }
    else if (request.url === "/continent/america") {
      response.render("american-countries.ejs", {
        countryList: americanCountries,
        currentTime
      });
    }
    else if (request.url === "/continent/asia") {
      response.render("asian-countries.ejs", {
        countryList: asianCountries,
        currentTime
      });
    }
    else if (request.url === "/continent/europe") {
      response.render("european-countries.ejs", {
        countryList: europeanCountries,
        currentTime
      });
    }
    else if (request.url === "/continent/oceania") {
      response.render("oceanian-countries.ejs", {
        countryList: oceanianCountries,
        currentTime
      });
    }
    else if (request.url === "/continent/all") {
      response.render("all-countries.ejs", {
        countryList: countries,
        currentTime
      });
    }
    else {
      response.render("404.ejs");
    };
  }
}

module.exports = controller;