import { allColors } from "../../shared";
import { Getter } from "../types";

export const getJSTSColors: Getter = (scheme) => {
	const { blue, red } = allColors[scheme];
	return [
		{
			scope: [
				"source.js storage.type",
				"source.jsx storage.type",
				"source.mjs storage.type",
				"source.cjs storage.type",
				"source.ts storage.type",
				"source.tsx storage.type",
			],
			settings: {
				foreground: red,
			},
		},
		{
			scope: ["source.js variable.language"],
			settings: {
				foreground: blue,
			},
		},
		{
			scope: ["source.ts variable.language"],
			settings: {
				foreground: blue,
			},
		},
	];
};
