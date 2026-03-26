import { allColors } from "../../shared";
import { Getter } from "../types";

export const getJsonColors: Getter = (scheme) => {
	const { green } = allColors[scheme];
	return [
		{
			scope: [
				"support.type.property-name.json",
				"support.type.property-name.json.comments",
			],
			settings: {
				foreground: green,
			},
		},
	];
};
