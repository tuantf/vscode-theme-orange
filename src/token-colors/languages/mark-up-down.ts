import { allColors } from "../../shared";
import { Getter } from "../types";

export const getMarkUpDownColors: Getter = (scheme) => {
	const { orange, blue, red, orange2, grey } = allColors[scheme];
	return [
		{
			scope: "markup.underline",
			settings: {
				fontStyle: "underline",
			},
		},
		{
			scope: "string.other.link.title.markdown",
			settings: {
				foreground: grey,
				fontStyle: "underline",
			},
		},
		{
			scope: "markup.underline.link",
			settings: {
				foreground: orange,
			},
		},
		{
			scope: "markup.bold",
			settings: {
				fontStyle: "bold",
				foreground: orange,
			},
		},
		{
			scope: "markup.heading",
			settings: {
				fontStyle: "bold",
				foreground: orange,
			},
		},
		{
			scope: "heading.1.markdown entity.name.section.markdown",
			settings: {
				fontStyle: "bold",
				foreground: red,
			},
		},
		{
			scope: "heading.2.markdown entity.name.section.markdown",
			settings: {
				fontStyle: "bold",
				foreground: orange,
			},
		},
		{
			scope: "heading.3.markdown entity.name.section.markdown",
			settings: {
				fontStyle: "bold",
				foreground: orange2,
			},
		},
		{
			scope: "heading.4.markdown entity.name.section.markdown",
			settings: {
				fontStyle: "bold",
				foreground: blue,
			},
		},
		{
			scope: "heading.5.markdown entity.name.section.markdown",
			settings: {
				fontStyle: "bold",
				foreground: orange,
			},
		},
		{
			scope: "heading.6.markdown entity.name.section.markdown",
			settings: {
				fontStyle: "bold",
				foreground: orange2,
			},
		},
		{
			scope: "markup.italic",
			settings: {
				fontStyle: "italic",
			},
		},
		{
			scope: "markup.inserted",
			settings: {
				foreground: orange,
			},
		},
		{
			scope: "markup.deleted",
			settings: {
				foreground: red,
			},
		},
		{
			scope: "markup.changed",
			settings: {
				foreground: orange,
			},
		},
		{
			scope: "markup.punctuation.quote.beginning",
			settings: {
				foreground: orange,
			},
		},
		{
			scope: "markup.punctuation.list.beginning",
			settings: {
				foreground: blue,
			},
		},
		{
			scope: ["markup.inline.raw", "markup.fenced_code.block"],
			settings: {
				foreground: grey,
			},
		},
	];
};