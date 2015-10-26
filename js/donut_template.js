function DonutTemplate(data) {

function booleanChange() {
	if (data.Sprinkles === true) {
		return 'has';
	} else {
		return 'does not have';
	};
}

function pronounChange() {
	if (data.Gender === 'Male') {
		return 'His';
	} else {
		return 'Her';
	};
}


	return `
		<div>
			<p class="title">${data.Name} is a ${data.Gender}.</p>
			<hr>
			<p>${pronounChange()} favorite flavor donut is ${data.Flavor}.</p>
			<p>This donut ${booleanChange()} sprinkles.</p>
			<p>${data.Name} has eaten ${data.NumberEaten} ${data.Flavor} donuts.</p>
		</div>
	`;
}

export default DonutTemplate;