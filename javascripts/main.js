import kjs from "./k";
import drawers from "./widgets/drawers";
import extendingForm from "./widgets/extending-form";
import tabs from "./widgets/tabs";

document.addEventListener("DOMContentLoaded", () => {
  kjs({ drawers, extendingForm, tabs }, document);

  const masterCheckbox = document.getElementById("masterCheckbox");
  const linkedCheckboxes = document.getElementsByClassName("linkedCheckbox");

  // Add click event listener to master checkbox
  masterCheckbox.addEventListener("click", function () {
    if (this.checked) {
      // If master checkbox is checked, check all linked checkboxes
      for (let i = 0; i < linkedCheckboxes.length; i++) {
        linkedCheckboxes[i].checked = true;
      }
    } else {
      // If master checkbox is unchecked, uncheck all linked checkboxes
      for (let i = 0; i < linkedCheckboxes.length; i++) {
        linkedCheckboxes[i].checked = false;
      }
    }
  });

  // Add click event listener to linked checkboxes
  for (let i = 0; i < linkedCheckboxes.length; i++) {
    linkedCheckboxes[i].addEventListener("click", function () {
      let checkedCount = 0;
      for (let j = 0; j < linkedCheckboxes.length; j++) {
        if (linkedCheckboxes[j].checked) {
          checkedCount++;
        }
      }
      if (checkedCount === linkedCheckboxes.length) {
        // If all linked checkboxes are checked, check the master checkbox
        masterCheckbox.checked = true;
        masterCheckbox.indeterminate = false;
      } else if (checkedCount === 0) {
        // If no linked checkboxes are checked, uncheck the master checkbox
        masterCheckbox.checked = false;
        masterCheckbox.indeterminate = false;
      } else {
        // If some linked checkboxes are checked, set the master checkbox to indeterminate
        masterCheckbox.checked = false;
        masterCheckbox.indeterminate = true;
      }
    });
  }
});
