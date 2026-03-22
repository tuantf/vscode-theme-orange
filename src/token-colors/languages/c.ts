import { allColors } from "../../shared";
import { Getter } from "../types";

export const getCColors: Getter = (scheme) => {
	const { blue, orange2, green, mauve } = allColors[scheme];
	return [
		// C C++ ----------------------------------------
		{
			scope: "keyword.control.directive",
			settings: {
				foreground: mauve,
			},
		},
		{
			scope: "support.function.C99",
			settings: {
				foreground: orange2,
			},
		},
		// C# ----------------------------------------
		{
			name: "C# functions",
			scope: ["meta.function.cs", "entity.name.function.cs"],
			settings: {
				foreground: green,
			},
		},
		{
			name: "C# namespace",
			scope: ["entity.name.type.namespace.cs"],
			settings: {
				foreground: orange2,
			},
		},
		{
			name: "C# Variables",
			scope: [
				"keyword.other.using.cs",
				"entity.name.variable.field.cs",
				"entity.name.variable.local.cs",
				"variable.other.readwrite.cs",
			],
			settings: {
				foreground: blue,
			},
		},
		{
			name: "C# This",
			scope: ["keyword.other.this.cs", "keyword.other.base.cs"],
			settings: {
				foreground: mauve,
			},
		},
	];
};