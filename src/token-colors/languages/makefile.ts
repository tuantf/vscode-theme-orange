import { allColors } from "../../shared";
import { Getter } from "../types";

export const getMakefileColors: Getter = (scheme) => {
	const { orange2, green } = allColors[scheme];
	return [
		{
			scope: "meta.scope.prerequisites",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "entity.name.function.target",
			settings: {
				foreground: green,
				fontStyle: "bold",
			},
		},
	];
};