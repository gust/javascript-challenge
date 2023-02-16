function checkbox(widget) {
  const checkboxes = widget.querySelectorAll('input[type="checkbox"]');
  const parentCheckbox = widget.querySelector("[kjs-role=parent]");
  const childCheckboxes = widget.querySelectorAll("[kjs-role=child]");

  function handleCheckboxClick(e) {
    const targetRole = e.target.getAttribute("kjs-role");

    if (targetRole === "parent") {
      childCheckboxes.forEach((child) => {
        child.checked = e.target.checked;

        if (child.getAttribute("kjs-has-children") === "true") {
          child.indeterminate = e.target.indeterminate;
          toggleChildren(child, e.target.checked);
        }
      });
    } else {
      if (e.target.getAttribute("kjs-parent-id")) {
        toggleParent(e.target.getAttribute("kjs-parent-id"));
      }

      if (e.target.getAttribute("kjs-has-children") === "true") {
        toggleChildren(e.target, e.target.checked);
      }

      const checkedCount = widget.querySelectorAll(
        "[kjs-role=child]:checked"
      ).length;

      parentCheckbox.checked = checkedCount > 0;
      parentCheckbox.indeterminate =
        checkedCount > 0 && checkedCount < childCheckboxes.length;
    }
  }

  function toggleParent(parentKey) {
    const nestedParentCheckbox = widget.querySelector(
      `[kjs-id="${parentKey}"]`
    );
    const nestedChildCheckbox = widget.querySelectorAll(
      `[kjs-parent-id="${parentKey}"]`
    );

    const nestedChildCheckedCount = widget.querySelectorAll(
      `[kjs-parent-id="${parentKey}"]:checked`
    ).length;

    nestedParentCheckbox.checked = nestedChildCheckedCount > 0;
    nestedParentCheckbox.indeterminate =
      nestedChildCheckedCount > 0 &&
      nestedChildCheckedCount < nestedChildCheckbox.length;

    const nestedParentBoxUpdated =
      (nestedParentCheckbox.checked && !nestedParentCheckbox.indeterminate) ||
      (!nestedParentCheckbox.checked && !nestedParentCheckbox.indeterminate);

    const hasParentId = nestedParentCheckbox.getAttribute("kjs-parent-id");

    if (hasParentId && nestedParentBoxUpdated) {
      toggleParent(hasParentId);
    }
  }

  function toggleChildren(parent, checked) {
    const children = parent.parentElement.parentElement.querySelectorAll(
      `[kjs-parent-id="${parent.getAttribute("kjs-id")}"]`
    );

    children.forEach((child) => {
      child.checked = checked;
      if (child.getAttribute("kjs-has-children") === "true") {
        toggleChildren(child, checked);
      }
    });
  }

  let actions = [];

  checkboxes.forEach((checkbox) => {
    actions.push({
      element: checkbox,
      event: "click",
      handler: handleCheckboxClick,
    });
  });

  return { actions: actions };
}

module.exports = checkbox;
