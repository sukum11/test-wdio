const { Given } = require("cucumber");
const GoogleSearch = require("../pages/googleSearch.page");

const googleSearchPage = new GoogleSearch();

Given("I launch google search engine", function() {
  googleSearchPage.launch();
  googleSearchPage.validateTitle();
});
