import kjs from './k';
import checkboxes from './widgets/checkboxes';
import drawers from './widgets/drawers';
import extendingForm from './widgets/extending-form';
import tabs from './widgets/tabs';

document.addEventListener("DOMContentLoaded", () => {
  kjs({ drawers, extendingForm, tabs, checkboxes }, document);
});
