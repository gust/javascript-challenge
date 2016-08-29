import kjs           from './k';
import drawers       from './widgets/drawers';
import extendingForm from './widgets/extending-form';
import tabs          from './widgets/tabs';
import checkbox          from './widgets/checkbox';

document.addEventListener("DOMContentLoaded", () => {
  kjs({ drawers, extendingForm, tabs, checkbox }, document);
  // { foo, bar, baz }
  // { foo: foo, bar: bar, baz: baz }

});
