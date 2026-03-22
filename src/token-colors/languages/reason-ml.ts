import { allColors } from "../../shared";
import { Getter } from "../types";

export const getReasonMLColors: Getter = (scheme) => {
	const { green, orange, teal } = allColors[scheme];
	return [
		{
			name: "ReasonML String",
			scope: ["source.reason string.double", "source.reason string.regexp"],
			settings: {
				foreground: teal,
			},
		},
		{
			name: "ReasonML equals sign",
			scope: ["source.reason keyword.control.less"],
			settings: {
				foreground: teal,
			},
		},
		{
			name: "ReasonML variable",
			scope: ["source.reason entity.name.function"],
			settings: {
				foreground: green,
			},
		},
		{
			name: "ReasonML property",
			scope: [
				"source.reason support.property-value",
				"source.reason entity.name.filename",
			],
			settings: {
				foreground: orange,
			},
		},
	];
};