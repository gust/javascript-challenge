import VS from './vs';
import bar from './widgets/bar';
import baz from './widgets/baz';
import qux from './widgets/qux';

document.addEventListener("DOMContentLoaded", () => {
  VS.initializeWidgets({ bar, baz, qux });
});
