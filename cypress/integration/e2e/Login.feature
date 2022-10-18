Feature: Login

    @login @regression
    Scenario Outline: Login successfully
        Given User is on Login page
        And User fill Admin UI informations with <information>
        When User click on LOGIN IN button
        Then User see Home page

        Examples:
            | information       |
            | valid information |