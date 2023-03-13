Feature: App Demo QA

  @clickAllButton
  Scenario: Access Menu Button

    Given I am on the front page
    When I click the module elements
    Then Accordion Element Modul is Displayed and I clik button menu
    When I Click ClickMe Button and the message show up
    When I click Right Click Me Button and Message -You have done a right click- show up
    When I click Doble Click Me Button and Message -You have done a double click- successfully show up

  @doDragAndDrop
  Scenario: Do Drag and Drop

    Given I am on the front page
    When I click the module Interaction
    Then I click menu dropable
    When I do drag and drop
   
