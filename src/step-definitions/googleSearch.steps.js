import { Given, When, Then } from "cucumber";
import GoogleSearch from "../pages/googleSearch.page";

const googleSearchPage = new GoogleSearch();

Given("I launch the url {string}", function(url) {
  googleSearchPage.launch(url);
  googleSearchPage.validateTitle(url);
});

When("I enter {string} in search engine", function(text) {
  googleSearchPage.searchKeyword(text);
});

Then("I see the list of search results", function() {
  googleSearchPage.verifyResultsAreDisplayed();
});
