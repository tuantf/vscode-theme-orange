import { allColors } from "../../shared";
import { Getter } from "../types";

export const getPythonColors: Getter = (scheme) => {
	const { green, red, fg2, orange2 } = allColors[scheme];
	return [
		{
			name: "Python function",
			scope: ["meta.function.python", "entity.name.function.python"],
			settings: {
				foreground: green,
			},
		},
		{
			name: "Python Function and Class definition keywords",
			scope: [
				"storage.type.function.python",
				"storage.modifier.declaration",
				"storage.type.class.python",
				"storage.type.string.python",
			],
			settings: {
				foreground: red,
			},
		},
		{
			name: "Async keyword",
			scope: ["storage.type.function.async.python"],
			settings: {
				foreground: red,
			},
		},
		{
			name: "Python Function Call",
			scope: "meta.function-call.generic",
			settings: {
				foreground: green,
			},
		},
		{
			name: "Python Function Arguments",
			scope: "meta.function-call.arguments",
			settings: {
				foreground: fg2,
			},
		},
		{
			name: "Python Function decorator",
			scope: "entity.name.function.decorator",
			settings: {
				foreground: orange2,
				fontStyle: "bold",
			},
		},
		{
			name: "Python ALL CAPS",
			scope: "constant.other.caps",
			settings: {
				fontStyle: "bold",
			},
		},
	];
};