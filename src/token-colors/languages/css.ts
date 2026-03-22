import { allColors } from "../../shared";
import { Getter } from "../types";

export const getCSSColors: Getter = (scheme) => {
	const { orange, fg1, blue, red, orange2 } = allColors[scheme];
	return [
		{
			scope: "entity.other.attribute-name.css",
			settings: {
				foreground: orange,
			},
		},
		{
			scope: "source.css meta.selector",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "support.type.property-name.css",
			settings: {
				foreground: orange,
			},
		},
		{
			scope: "entity.other.attribute-name.class",
			settings: {
				foreground: blue,
			},
		},
		{
			scope: [
				"source.css support.function.transform",
				"source.css support.function.timing-function",
				"source.css support.function.misc",
			],
			settings: {
				foreground: red,
			},
		},
		{
			name: "CSS property value",
			scope: [
				"support.property-value",
				"constant.rgb-value",
				"support.property-value.scss",
				"constant.rgb-value.scss",
			],
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: ["entity.name.tag.css"],
			settings: {
				fontStyle: "",
			},
		},
	];
};