function DonutTemplate(data) {
	return `
		<li> A ${data.Flavor} donut that ${data.Sprinkles} sprinkles and I have had ${data.NumberEaten} </li>
	`;
}

return default DonutTemplate;