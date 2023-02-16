function linkedCheckboxes(widget) {
  let checkedCount = 0;

  const controller = widget.querySelector('[kjs-role=checkbox-controller]');
  function handleControllerClick() {
    /**
     * upon click, we'll check if the classname is set to "checked"
     * - if it is, call the deselect function to clear each checkbox and the controller
     * - if the classname is either empty or "intermediary", call the select all function
     */

    if (controller.className === 'checked') {
      changeCheckbox(false);
    } else {
      changeCheckbox(true);
    }

    // accepts boolean (true or false)
    // if true -> select all : deselect all
    function changeCheckbox(boolean) {
      checkboxContainers.forEach((container) => {
        const selectedId = container.getAttribute('kjs-id');
        const cb = document.querySelector(`[kjs-option-id="${selectedId}"]`);

        cb.checked = boolean;
        // updates controller UI based on boolean value
        if (boolean) {
          container.classList.add('active');
          setToChecked();
          checkedCount = checkboxContainers.length;
        } else {
          container.classList.remove('active');
          deselectAll();
          checkedCount = 0;
        }
      });
    }
  }

  // each checkbox has its own container, which is used to show
  // whether a box is 'active' or checked
  const checkboxContainers = widget.querySelectorAll(
    '[kjs-role=checkbox-container]'
  );
  function handleCheckboxClick(e) {
    const selectedId = e.target.getAttribute('kjs-option-id');

    // Individually check each checkbox, setting controller
    // to intermediary state unless all boxes are checked
    checkboxContainers.forEach((container) => {
      if (container.getAttribute('kjs-id') === selectedId) {
        // returns a nodeList -> since we know each id is unique, extract its first value
        const cb = document.querySelector(`[kjs-option-id="${selectedId}"]`);
        /**
         * with each click onto a checkbox, we'll check if the box is checked and depending
         * on the return boolean perform a few actions:
         * - if the box is checked, add an active call to update UI
         * - update checkedCount num to determine whether or not the controller
         * should show as intermediary (orange), checked (blue), or deselected (white)
         */

        if (cb.checked) {
          container.classList.add('active');
          checkedCount++;
        } else {
          container.classList.remove('active');
          checkedCount--;
        }

        // Updates controller box UI based on checkedCount value
        if (checkedCount && checkedCount < checkboxContainers.length) {
          setToIntermediary();
        } else if (checkedCount === checkboxContainers.length) {
          setToChecked();
        } else {
          deselectAll();
        }
      }
    });
  }

  function setToChecked() {
    controller.className = 'checked';
  }
  function setToIntermediary() {
    controller.className = 'intermediary';
  }
  function deselectAll() {
    controller.className = '';
  }

  let actions = [];
  checkboxContainers.forEach((container) => {
    actions.push({
      element: container,
      event: 'click',
      handler: handleCheckboxClick,
    });
  });

  actions.push({
    element: controller,
    event: 'click',
    handler: handleControllerClick,
  });

  return { actions };
}

module.exports = linkedCheckboxes;
