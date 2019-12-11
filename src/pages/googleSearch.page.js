import { expect } from "chai";
import {
  GOOGLE_SEARCH_INPUT,
  GOOGLE_SEARCH_BUTTON,
  GOOGLE_SEARCH_RESULTS_COUNT
} from "../locators/googleSearch";

class GoogleSearch {
  launch(url) {
    browser.url(url);
    browser.pause(1000);
  }

  validateTitle(url) {
    expect(url).to.include(browser.getTitle());
  }

  searchKeyword(text) {
    $(GOOGLE_SEARCH_INPUT).setValue(text);
    $(GOOGLE_SEARCH_BUTTON).click();
  }

  verifyResultsAreDisplayed() {
    expect($(GOOGLE_SEARCH_RESULTS_COUNT).getText()).to.include("results");
  }
}

export default GoogleSearch;
