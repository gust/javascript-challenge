## Notes on How Framework Functions

In the `javascript-challenge.html` file, the `div` that contains all of your widget's content should have a `kjs-type` with the same name as the corresponding widget function that is imported in the `main.js`

- Example: Although in `drawers.js` the function is called `accordion()`, it is imported into `main.js` as `drawers`, which matches the `div` on line 96's `kjs-type` in `javascript-challenge.html`

These widget functions are put into an object and passed as a contructor parameter in the `kjs()` function, as well as the document (or web page). `main.js` adds event listeners to each of our widgets once the HTML is completely loaded and parsed. In `k.js` our widgets are extracted by `kjs-type`, are setup (if setup function exists), and has further event listeners added for each handler function created.

---

## Implementation

For the Linked Checkboxes widget, in the `javascript-challenge.html`, each checkbox input is wrapped in its own container. This is to be able to add and remove an `active` class that alters the UI and corresponds with whether or not a box is checked.

There are two controllers in `linked-checkboxes.js` that actually handle the linked checkboxes functionality: one for the checkbox containers and one for the controller itself.

Starting with the controller, its three states are represented in the UI by different colors.

1. Unchecked - white (border)
2. Checked - blue
3. Intermediary (orange)

Each time a controller is clicked, the `handleControllerClick()` function checks whether or not all the boxes are checked by the controllers "checked" class. It will then either deselect or select all boxes.

In the `handleCheckboxClick()` function we start by selecting all containers based on their `kjs-option-id`. From there we iterate through each container and match the checkbox's id with the container id. As with the controller, we add or remove classes if a checkbox is checked or not, as well as updating a `checkedCount` number variable that let's us decide wether or not to change the controller's state.

---

When figuring out how this `k.js`framework actually functioned, I used a lot of console logs to understand exactly what information was being passed through different functions. In the `linked-checkboxes.js` file, I tried to refactor as much as possible while still leaving the code readable and easy to follow. All in all, this was a great and challenging exercise.

Thank you for the opportunity and I hope to hear some feedback from you soon!
