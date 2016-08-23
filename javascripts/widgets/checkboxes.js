function checkbox(widget) {
  const superCheckbox = widget.querySelectorAll('[kjs-role="checkbox-super"]');    
  const childCheckboxes = widget.querySelectorAll('[kjs-role="checkbox"]');    
  // function setup(){

  // }
  function handleClick(e) {
    if (superCheckbox[0].checked === true ){
      childCheckboxes.forEach((child) => {
        child.checked = true
      });
    } else {
       childCheckboxes.forEach((child) => {
        child.checked = false
      });
    }
      
  }

  let actions = [];

  superCheckbox.forEach((handle) => {
    actions.push({
      element: handle,
      event: 'click',
      handler: handleClick
    });
  });

  return { actions: actions };

}

module.exports = checkbox;
