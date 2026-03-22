import { allColors } from "../../shared";
import { Getter } from "../types";

export const getShellColors: Getter = (scheme) => {
	const { red, orange, teal } = allColors[scheme];
	return [
		{
			scope: "keyword.operator.logical",
			settings: {
				foreground: red,
			},
		},
		{
			scope: "punctuation.definition.logical-expression",
			settings: {
				foreground: orange,
			},
		},
		{
			scope: [
				"string.interpolated.dollar.shell",
				"string.interpolated.backtick.shell",
			],
			settings: {
				foreground: teal,
			},
		},
	];
};