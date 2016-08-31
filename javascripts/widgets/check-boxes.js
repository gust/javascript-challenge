function linkedCheckBox(widget) {
  const controllingBox = widget.querySelector('[kjs-role=controlling]');
  const relatedBoxes = widget.querySelectorAll('[kjs-role=related]');


  function handleRelatedCheck(e) {
    let someUnchecked = false;
    let someChecked  = false;
    let allSame = true;

    relatedBoxes.forEach((related) => {
      if(related.checked == true){
        someChecked = true;
      } else {
        someUnchecked = true;
      }
    });
    if (someUnchecked != someChecked){
      allSame = false;
    }

    return (allSame);
  }

  function handleControllingCheck(e) {

  }

  const actions = [{
    element: related,
    event: 'change',
    handler: setup
  }];

  return { actions };
}

module.exports = linkedCheckBox;