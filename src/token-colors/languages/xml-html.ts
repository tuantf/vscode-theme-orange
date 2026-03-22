import { allColors } from "../../shared";
import { Getter } from "../types";

export const getXMLHTMLColors: Getter = (scheme) => {
	const { grey, blue } = allColors[scheme];
	return [
		{
			scope: ["punctuation.definition.tag"],
			settings: {
				foreground: blue,
			},
		},
		{
			scope: ["text.html entity.name.tag", "text.html punctuation.tag"],
			settings: {
				foreground: grey,
				fontStyle: "bold",
			},
		},
	];
};