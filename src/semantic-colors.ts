import { allColors, ColorScheme } from "./shared";

export const getSemanticColors = (scheme: ColorScheme) => {
	const { orange, blue, fg1, green, mauve } = allColors[scheme];
	return {
		"constant.builtin": mauve,
		property: blue,
		"property:python": fg1,
		parameter: fg1,
		variable: fg1,
		function: green,
		"function.builtin": green,
		method: green,
		component: orange,
	};
};
