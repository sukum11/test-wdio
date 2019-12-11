Feature: Launch Google.com

  As a user i want to launch google search engine
  and search anything

  Scenario Outline: launch google search engine
    Given I launch the url "<url>"
    When I enter "<text>" in search engine
    Then I see the list of search results

    Examples:
      | url               | text        |
      | http://Google.com | webdriverIO |