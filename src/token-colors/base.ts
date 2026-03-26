import { allColors } from "../shared";
import { Getter } from "./types";

export const getBaseTokenColors: Getter = (scheme) => {
	const {
		fg1,
		fg2,
		grey,
		orange,
		orange2,
		blue,
		red,
		green,
		mauve,
		teal,
	} = allColors[scheme];
	return [
		{
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "emphasis",
			settings: {
				fontStyle: "italic",
			},
		},
		{
			scope: "strong",
			settings: {
				fontStyle: "bold",
			},
		},
		{
			scope: "header",
			settings: {
				foreground: blue,
			},
		},
		{
			scope: ["comment", "punctuation.definition.comment"],
			settings: {
				foreground: grey,
				fontStyle: "italic",
			},
		},
		{
			scope: ["constant", "support.constant", "variable.arguments"],
			settings: {
				foreground: mauve,
			},
		},
		{
			scope: "constant.rgb-value",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "entity.name.selector",
			settings: {
				foreground: blue,
			},
		},
		{
			scope: "entity.other.attribute-name",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: ["entity.name.tag", "punctuation.tag"],
			settings: {
				foreground: blue,
			},
		},
		{
			scope: ["invalid", "invalid.illegal"],
			settings: {
				foreground: red,
			},
		},
		{
			scope: "invalid.deprecated",
			settings: {
				foreground: orange,
			},
		},
		{
			scope: "meta.selector",
			settings: {
				foreground: blue,
			},
		},
		{
			scope: "meta.preprocessor",
			settings: {
				foreground: mauve,
			},
		},
		{
			scope: "meta.preprocessor.string",
			settings: {
				foreground: teal,
			},
		},
		{
			scope: "meta.preprocessor.numeric",
			settings: {
				foreground: mauve,
			},
		},
		{
			scope: "meta.header.diff",
			settings: {
				foreground: orange,
			},
		},
		{
			scope: "storage.type",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "storage.modifier",
			settings: {
				foreground: orange,
			},
		},
		{
			scope: "storage",
			settings: {
				foreground: red,
			},
		},
		{
			scope: "string",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "string.tag",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "string.value",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "string.regexp",
			settings: {
				foreground: green,
			},
		},
		{
			scope: "string.escape",
			settings: {
				foreground: green,
			},
		},
		{
			scope: "string.quasi",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "string.entity",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "object",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "module.node",
			settings: {
				foreground: blue,
			},
		},
		{
			scope: "support.type.property-name",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "keyword",
			settings: {
				foreground: red,
			},
		},
		{
			scope: "keyword.control",
			settings: {
				foreground: red,
			},
		},
		{
			scope: "keyword.control.module",
			settings: {
				foreground: red,
			},
		},
		{
			scope: "keyword.control.less",
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "keyword.operator",
			settings: {
				foreground: orange,
			},
		},
		{
			scope: "keyword.operator.new",
			settings: {
				foreground: red,
			},
		},
		{
			scope: "keyword.other.unit",
			settings: {
				foreground: grey,
			},
		},
		{
			scope: "metatag.php",
			settings: {
				foreground: red,
			},
		},
		{
			scope: "support.function.git-rebase",
			settings: {
				foreground: grey,
			},
		},
		{
			scope: "constant.sha.git-rebase",
			settings: {
				foreground: grey,
			},
		},
		{
			name: "Types declaration and references",
			scope: [
				"meta.type.name",
				"meta.return.type",
				"meta.return-type",
				"meta.cast",
				"meta.type.annotation",
				"support.type",
				"storage.type.cs",
				"variable.class",
			],
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: ["variable.this", "support.variable"],
			settings: {
				foreground: mauve,
			},
		},
		{
			name: "Function declarations and calls",
			scope: [
				"entity.name.function",
				"entity.name.class.static.function",
				"entity.function",
				"entity.name.function.static",
				"entity.name.function.function-call",
				"entity.name.method",
				"entity.name.method.function-call",
				"entity.name.static.function-call",
			],
			settings: {
				foreground: green,
			},
		},
		{
			scope: ["entity.name.class", "entity.name.type"],
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: ["entity.name", "entity.static"],
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: "support.function.builtin",
			settings: {
				foreground: green,
			},
		},
		{
			scope: "brace",
			settings: {
				foreground: fg2,
			},
		},
		{
			name: "variables",
			scope: [
				"meta.parameter.type.variable",
				"variable.parameter",
				"variable.name",
				"variable.other",
				"variable",
				"string.constant.other.placeholder",
			],
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "prototype",
			settings: {
				foreground: orange,
			},
		},
		{
			scope: ["punctuation"],
			settings: {
				foreground: grey,
			},
		},
		{
			scope: "punctuation.quoted",
			settings: {
				foreground: fg1,
			},
		},
		{
			scope: "punctuation.quasi",
			settings: {
				foreground: orange,
			},
		},
		{
			name: "URL",
			scope: ["*url*", "*link*", "*uri*"],
			settings: {
				fontStyle: "underline",
			},
		},
	];
};
