import { allColors } from "../../shared";
import { Getter } from "../types";

export const getLatexColors: Getter = (scheme) => {
	const { grey, green, orange, orange2 } = allColors[scheme];
	return [
		{
			name: "LaTeX functions",
			scope: [
				"support.function.be.latex",
				"support.function.general.tex",
				"support.function.section.latex",
				"support.function.textbf.latex",
				"support.function.textit.latex",
				"support.function.texttt.latex",
				"support.function.emph.latex",
				"support.function.url.latex",
			],
			settings: {
				foreground: green,
			},
		},
		{
			name: "LaTeX text in math environment",
			scope: [
				"support.class.math.block.tex",
				"support.class.math.block.environment.latex",
			],
			settings: {
				foreground: orange,
			},
		},
		{
			name: "LaTeX preamble",
			scope: [
				"keyword.control.preamble.latex",
				"keyword.control.include.latex",
			],
			settings: {
				foreground: orange2,
			},
		},
		{
			name: "LaTeX packages",
			scope: ["support.class.latex"],
			settings: {
				foreground: grey,
			},
		},
	];
};