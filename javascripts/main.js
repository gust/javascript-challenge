import VS            from './vs';
import accordion     from './widgets/accordion';
import extendingForm from './widgets/extending-form';
import tabs          from './widgets/tabs';

document.addEventListener("DOMContentLoaded", () => {
  VS.initializeWidgets({
    accordion,
    extendingForm,
    tabs,
    foo: 'bar'
  });
});
