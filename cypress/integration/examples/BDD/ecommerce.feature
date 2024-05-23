Feature: End to end ecommerce validation

    Application Regression

    Scenario: E-commerce product delivery
        Given I open ecommerce page
        When I add item to cart
        When validate the total price
        Then select the counrty submit and verify thank you

    Scenario: Filling the form to shop
        Given I open ecommerce page
        When I fill the form details
        | name | gender |
        | nimit | Male |
        Then validate the forms behaviour
        | name | gender |
        | nimit | Male |
        Then select the shop page