import { allColors } from "../../shared";
import { Getter } from "../types";

export const getJavaColors: Getter = (scheme) => {
	const { blue, fg1, orange, orange2, fg2, red } = allColors[scheme];
	return [
		{
			name: "coloring of the Java import and package identifiers",
			scope: ["storage.modifier.import.java", "storage.modifier.package.java"],
			settings: {
				foreground: fg2,
			},
		},
		{
			scope: ["keyword.other.import.java", "keyword.other.package.java"],
			settings: {
				foreground: red,
			},
		},
		{
			scope: "storage.type.java",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "storage.type.annotation",
			settings: {
				foreground: blue,
				fontStyle: "bold",
			},
		},
		{
			scope: "keyword.other.documentation.javadoc",
			settings: {
				foreground: blue,
			},
		},
		{
			scope: "comment.block.javadoc variable.parameter.java",
			settings: {
				foreground: orange,
				fontStyle: "bold",
			},
		},
		{
			scope: [
				"source.java variable.other.object",
				"source.java variable.other.definition.java",
			],
			settings: {
				foreground: fg1,
			},
		},
	];
};