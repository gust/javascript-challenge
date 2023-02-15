# Gust Developer/Designer Challenge
We’d like you to use our simple, fake javascript framework to create a widget that handles some linked checkboxes. You'll find examples of other widgets in this repo, which you may use to guide you and to figure out how the framework functions. 

## Requirements
Create a 'linked checkbox' that allows a user to check or uncheck all of the related checkboxes simultaneously.
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

## What we’re looking for:
We want to see the way you approach learning about a new codebase, asking questions, solving problems, and communicating your intent. The javascript framework is very rough, has poor cross-browser compatibility, and is generally silly, but we don't want you to focus on those details, instead try to show us how you tackle a new problem. 

## Technical setup
k.js and the widgets we wrote with it are written in es6, but have no other dependencies. Jquery is available in the head of the html page, but you certainly don't need to use it to complete the challenge satisfactorily.

## Submission
Please clone this repo, implement your design, push it to a new private repo in your GitHub account, then add devs@gust.com as a collaborator to that repo and we'll check it out.

Happy Coding!
