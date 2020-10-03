This is the README file of the assignment 1.
---------------------------------------------------------------------------------------------------------
The idea of this assignment is to create a front-end application,
that presents the user with a textbox where they can list comma-separated items they usually eat for lunch.
Once that's entered, the user has to click the "Check If Too Much" button.

Conditions:
1-If the number of items in the textbox is less than or equal to 3, message should be "Enjoy!"
2-If the number of items is greater than 3, the message should be "Too much!"
3-If the textbox is empty and the user clicks the "Check If Too Much" button, the message should be "Please enter data first"

Note:
All the messages should show up under to the textbox. saying.
Only 1 message should be shown at any given time.
You are not required to handle a case where there is no item between some commas.

Rules:
Breaking one of these rules will cause you to fail the assignment:
1-You are not allowed to use regular HTML onclick attribute to bind behavior to the button.
  You must use the AngularJS way of binding behavior.  
2-At no point should your JavaScript code look up anything in the DOM of the browser.

Optional:
1-If the message is "Enjoy!" or "Too much!", make the font color green.
  If the message is "Please enter data first", make the font color red.

2-If the message is "Enjoy!" or "Too much!", make the border color around the textbox green.
  If the message is "Please enter data first", make the border color around the textbox red.
