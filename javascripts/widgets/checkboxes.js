"use strict";
// Nida Fatima Malik, nidamalik@qofinnovation.com, 2023-02-15
function checkboxes(widget) {
  const controller = widget.querySelectorAll('[kjs-role=controller]')[0].querySelectorAll('input[type="checkbox"]')[0]; // The one controlling check box

  const controlledBoxesList  = widget.querySelectorAll('[kjs-role=controlled]');// Get the controlled check boxes as an array
  const controlledBoxesArray = Array.from(controlledBoxesList);
  const controlled           = controlledBoxesArray.map
   ((c) => c.querySelectorAll('input[type="checkbox"]')[0])

  function allChecked() {                                                       // All controlled boxes are checked
    let all = true
    controlled.forEach((c) => {
      if (!c.checked) all = false
    })
    return all
  }

  function noneChecked() {                                                      // None of the controlled boxes are checked
    let all = true
    controlled.forEach((c) => {
      if (c.checked) all = false
    })
    return all
  }

  function setup() {                                                            // Called once at the start so we can set the widget up
  }

  function handleCheckBoxControllerClick(e) {                                   // Called every time the controlling box is clicked
    controlled.forEach((c) => {
      c.checked = controller.checked
    })
  }

  function handleCheckBoxControlledClick(e) {                                   // Called every time a controlled check box is clicked
    const B = controller
    if      (allChecked())  {
      B.checked       = true
      B.indeterminate = false
    }
    else if (noneChecked()) {
      B.checked       = false
      B.indeterminate = false
    }
    else {
      B.indeterminate = true
    }
  }

  let actions = [];                                                             // Description of the elements that we want to control with clicks

  actions.push({                                                                // The controlling check box
    element: controller,
    event  : 'click',
    handler: handleCheckBoxControllerClick
  });

  controlled.forEach((c) => {                                                   // The controlled check boxes
    actions.push({
      element:  c,
      event: 'click',
      handler: handleCheckBoxControlledClick
    });
  });

  return { setup, actions };                                                    // Descritpion of the widget so created
}

module.exports = checkboxes;
