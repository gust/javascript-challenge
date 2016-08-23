const accordion = {
  initialize(widget) {
    const contents = widget.querySelectorAll('[vs-role=content]');
    const tabs = widget.querySelectorAll('[vs-role=tab]');

    function dependentHide() {
      const activeTab = widget.querySelector('.active[vs-role=tab]');

      contents.forEach((content) => {
        if (activeTab.getAttribute('vs-id') == content.getAttribute('vs-tab-id')) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    }

    function handleTabClick(e) {
      tabs.forEach((tab) => { tab.classList.remove('active'); });
      e.target.classList.add('active');
      dependentHide();
    }

    dependentHide();

    tabs.forEach((tab) => {
      tab.addEventListener('click', handleTabClick);
    });
  }
};

module.exports = accordion;
