function checkbox(widget) {
    const checkboxes = widget.querySelectorAll('input[type="checkbox"]');
    const parentCheckbox = widget.querySelector('[kjs-role=parent]');
    const childCheckboxes = widget.querySelectorAll('[kjs-role=child]');

    function handleCheckboxClick(e) {
        const targetRole = e.target.getAttribute('kjs-role');

        if (targetRole === 'parent') {
            childCheckboxes.forEach((child) => {
                child.checked = e.target.checked;
            })
        } else {
            const checkedCount = widget.querySelectorAll('[kjs-role=child]:checked').length;

            parentCheckbox.checked = checkedCount > 0;
            parentCheckbox.indeterminate = checkedCount > 0 && checkedCount < childCheckboxes.length;
        }
    }
  
    let actions = [];
  
    checkboxes.forEach((checkbox) => {
      actions.push({
        element: checkbox,
        event: 'click',
        handler: handleCheckboxClick
      });
    });
  
    return { actions: actions };
  }
  
  module.exports = checkbox;
  