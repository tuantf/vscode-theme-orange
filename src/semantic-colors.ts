import { allColors, ColorScheme } from "./shared";

export const getSemanticColors = (scheme: ColorScheme) => {
	const { orange, fg1, fg2, green, mauve } = allColors[scheme];
	return {
		"constant.builtin": mauve,
		property: fg1,
		"property:python": fg1,
		"property:typescript": fg2,
		"property:javascript": fg2,
		"property:javascriptreact": fg2,
		"property:typescriptreact": fg2,
		"property:json": green,
		"property:jsonc": green,
		parameter: fg1,
		variable: fg1,
		function: green,
		"function.builtin": green,
		method: green,
		component: orange,
	};
};
