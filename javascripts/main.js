import VS            from './vs';
import drawers       from './widgets/drawers';
import extendingForm from './widgets/extending-form';
import tabs          from './widgets/tabs';

document.addEventListener("DOMContentLoaded", () => {
  VS.initializeWidgets({
    drawers,
    extendingForm,
    tabs
  });
});
