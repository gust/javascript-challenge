function linkedCheckboxes(widget) {
  const checkboxes = widget.querySelectorAll('[kjs-role=controller], [kjs-role=controllee]');

  function handleClick(e) {
    const isController = e.target.getAttribute('kjs-role') === 'controller';
    if (isController) {
      const id = e.target.getAttribute('kjs-id');
      const status = e.target.getAttribute('kjs-status');
      const controllees = widget.querySelectorAll(`[kjs-controller-id=${id}]`);
      switch (status) {
        case 'checked':
          e.target.setAttribute('kjs-status', 'unchecked');
          controllees.forEach(controllee => {
            controllee.checked = false;
          });
          break;
        case 'intermediary':
          e.target.setAttribute('kjs-status', 'unchecked');
          controllees.forEach(controllee => {
            controllee.checked = false;
          });
          break;
        default:
          e.target.setAttribute('kjs-status', 'checked');
          controllees.forEach(controllee => {
            controllee.checked = true;
          });
      }
    } else {
      const controllerId = e.target.getAttribute('kjs-controller-id');
      const controller = widget.querySelector(`[kjs-id=${controllerId}]`);
      const status = controller.getAttribute('kjs-status');
      const controllees = widget.querySelectorAll(`[kjs-controller-id=${controllerId}]`);
      switch (status) {
        case 'checked':
          e.target.checked = false;
          controller.setAttribute('kjs-status', 'intermediary');
          break;
        case 'intermediary':
          if (e.target.checked) {
            // User clicked on an unchecked related checkbox, so it became checked.
            let allChecked = true;
            controllees.forEach(controllee => {
              allChecked &&= controllee.checked;
            })
            if (allChecked) {
              controller.setAttribute('kjs-status', 'checked');
            }
          } else {
            // User clicked on a checked related checkbox, so it became unchecked.
            let checkedExists = false;
            controllees.forEach(controllee => {
              checkedExists ||= controllee.checked;
            });
            if (!checkedExists) {
              controller.checked = false;
              controller.setAttribute('kjs-status', 'unchecked');
            }
          }
          break;
        default:
          e.target.checked = true;
          break;
      }
    }
  }

  let actions = [];
  checkboxes.forEach((checkbox) => {
    actions.push({
      element: checkbox,
      event: 'change',
      handler: handleClick
    });
  });

  return { actions: actions };
}

module.exports = linkedCheckboxes;
