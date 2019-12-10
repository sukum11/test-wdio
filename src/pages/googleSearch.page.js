const { expect } = require("chai");

module.exports = class GoogleSearch {
  launch() {
    browser.url("https://google.com");
    browser.pause(1000);
  }

  validateTitle() {
    expect(browser.getTitle()).to.equal("Google");
  }
};
