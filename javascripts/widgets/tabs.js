function tabs(widget) {
  const contents = widget.querySelectorAll('[kjs-role=content]');
  const tabs = widget.querySelectorAll('[kjs-role=tab]');

  function setup() {
    const activeTab = widget.querySelector('.active[kjs-role=tab]');

    contents.forEach((content) => {
      if (activeTab.getAttribute('kjs-id') == content.getAttribute('kjs-tab-id')) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }

  function handleTabClick(e) {
    tabs.forEach((tab) => { tab.classList.remove('active'); });
    e.target.classList.add('active');
    setup();
  }

  let actions = [];

  tabs.forEach((tab) => {
    actions.push({
      element: tab,
      event: 'click',
      handler: handleTabClick
    });
  });

  return { setup, actions };
}

module.exports = tabs;
