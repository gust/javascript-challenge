function toggle(widget) {
	const allCheckboxes = widget.querySelectorAll('[kjs-role]');

	function setup() {
		allCheckboxes.forEach((checkbox) => {
			checkbox.checked = false;
		});
	}

	let actions = [];

	const toggleAll = widget.querySelector('[kjs-role=toggleAll]');
	const toggle = widget.querySelectorAll('[kjs-role=toggle]');

	actions.push({
		element: toggleAll,
		event: 'change',
		handler: () => { console.log('implement me!')}
	});

	toggle.forEach((checkbox) => {
		actions.push({
			element: checkbox,
			event: 'change',
			handler: () => { console.log('implement me!')}
		});
	});

	return {setup, actions};
}

module.exports = toggle;