const accordion = {
  initialize(widget) {
    const handles = widget.querySelectorAll('[vs-role=handle]');
    const drawers = widget.querySelectorAll('[vs-role=drawer]');

    function handleClick(e) {
      const openId = e.target.getAttribute('vs-id');

      drawers.forEach((drawer) => {
        if (drawer.getAttribute('vs-handle-id') == openId) {
          drawer.classList.toggle('open');
        } else {
          drawer.classList.remove('open');
        }
      });
    }

    handles.forEach((handle) => {
      handle.addEventListener('click', handleClick);
    });
  }
};

module.exports = accordion;
