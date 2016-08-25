import kjs           from './k';
import drawers       from './widgets/drawers';
import extendingForm from './widgets/extending-form';
import tabs          from './widgets/tabs';
import checkBoxes    from './widgets/check-boxes';

document.addEventListener("DOMContentLoaded", () => {
  kjs({ drawers, extendingForm, tabs, checkBoxes }, document);
});

// var foo = someObject;

// { foo: foo }
// { foo }

// { drawers: drawers, extendingForm: extendingForm }
