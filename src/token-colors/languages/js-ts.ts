import { allColors } from "../../shared";
import { Getter } from "../types";

export const getJSTSColors: Getter = (scheme) => {
	const { mauve } = allColors[scheme];
	return [
		// javascript ---------------------------------------
		{
			scope: ["source.js variable.language"],
			settings: {
				foreground: mauve,
			},
		},
		// typescript ---------------------------------------
		{
			scope: ["source.ts variable.language"],
			settings: {
				foreground: mauve,
			},
		},
	];
};
