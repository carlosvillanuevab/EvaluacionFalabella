
Feature: Searching for Recetas by tottuson google

  I want to find TestCafe repository by Google search

  Scenario: Searching recetas for evaluacion
    Given I am open Google's search page
    When I am typing my search request "tottus sucursales" on Google
    And I press the "enter" key on Google
    And I select first options "SITIO WEB" 
    And I should see that the result is "Recetas"
    And I return to "Home" to find the main menu
    And I select option "ALTA"
    And I search "CORONA DE ROLLITOS DE CANELA"
    Then I should see that a result is "azúcar rubia"
    And I should see "canela" too

