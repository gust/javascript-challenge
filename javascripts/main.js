import kjs              from './k';
import drawers          from './widgets/drawers';
import extendingForm    from './widgets/extending-form';
import tabs             from './widgets/tabs';
import linkedCheckboxes from './widgets/linked-checkboxes';

document.addEventListener("DOMContentLoaded", () => {
  kjs({ drawers, extendingForm, tabs, linkedCheckboxes }, document);
});
