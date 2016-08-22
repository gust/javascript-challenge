#Gust Developer/Designer Challenge

We’d like you to use our simple, fake javascript framework to create a widget that handles some linked checkboxes. You'll find examples of other widgets in this repo, which you may use to guide you and to figure out how the framework functions. Additionally you'll have the help of your interviewer - use them as you would use the docs. 

##Requirements
Create a 'super checkbox' that allows a user to check or uncheck all of the related checkboxes simultaneously.
- The controlling checkbox will have three states: a checked state, an unchecked state, and an intermediary state.
- When controlling checkbox is unchecked:
  - if the user clicks on a related checkbox, that checkbox becomes checked, and the controlling checkbox remains unchecked.
  - if the user clicks on the controlling checkbox, it becomes checked and related checkboxes become checked.
- When the controlling checkbox is checked:
  - if the user clicks on the controlling checkbox, it becomes unchecked, and all related checkboxes become unchecked.
  - if the user clicks on a related checkbox, that checkbox becomes unchecked, and the controlling checkbox enters the intermediary state.
- When the controlling checkbox is in the intermediary state:
  - if the user clicks on the controlling checkbox, it becomes unchecked, and all related checkboxes become unchecked.
  - if the user clicks on a checked related checkbox, the controlling checkbox remains in the intermediary state unless there are no more checked related boxes, in which case it returns to the unchecked state.
  - if the user clicks on an unchecked related checkbox, the controlling checkbox remains in the intermediary state unless there are no more unchecked related boxes, in which case it returns to the checked state.
- for an example of this behavior, check out a gmail inbox

##What we’re looking for:
Code, and some not-code things.

## Technical setup
Javascript. 

Happy Coding!
