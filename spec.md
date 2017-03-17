# Specifications for the Angular Assessment

Specs:

 - [x] Use Angular to build the app
 - [x] Must contain some sort of nested views - All views are nested under 'home' state.
 - [x] Must contain some sort of searching as well as filtering based on some criteria. Ex: All items in the "fruit" category, or all tasks past due - There are search filters on authors feed (allowing user to search for a favourite contributor), stories feed (allows user to search through all stories), and profile (allows users to search through stories either they created or have contributed to). There is also a custom filter applied to usernames that capitalizes the first letter on user show and index templates.
 - [x] Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart - Likes dynamically update on Story show template when like button is clicked.
 - [x] Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product - Clicking on the link for a story in the story feed will take you to the show page for that story, similarly, clicking on the link for a user in the author feed will take you to their profile page.
 - [x] Data should be validated in Angular before submission - Forms include 'required' and 'maxlength' to validate data before submission. Ng-messages is used to inform users when invalid data is entered.
 - [x] Must talk to the Rails backend using $http and Services. you may not use $resource - UserService, PostService, and PostUserService all communicate with the Rails back-end using $http.
 - [x] Your README.md includes a short description, install instructions, a contributors guide and a link to the license for your code

Confirm

- [x] You have a large number of small Git commits
- [x] Your commit messages are meaningful
- [x] You made the changes in a commit that relate to the commit message
- [x] You don't include changes in a commit that aren't related to the commit message
