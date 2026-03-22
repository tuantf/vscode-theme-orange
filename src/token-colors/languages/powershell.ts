import { allColors } from "../../shared";
import { Getter } from "../types";

export const getPowershellColors: Getter = (scheme) => {
	const { orange, green, fg2 } = allColors[scheme];
	return [
		{
			name: "Powershell member",
			scope: ["source.powershell variable.other.member.powershell"],
			settings: {
				foreground: orange,
			},
		},
		{
			name: "Powershell function",
			scope: ["source.powershell support.function.powershell"],
			settings: {
				foreground: green,
			},
		},
		{
			name: "Powershell function attribute",
			scope: ["source.powershell support.function.attribute.powershell"],
			settings: {
				foreground: fg2,
			},
		},
		{
			name: "Powershell hashtable member",
			scope: [
				"source.powershell meta.hashtable.assignment.powershell variable.other.readwrite.powershell",
			],
			settings: {
				foreground: orange,
			},
		},
	];
};