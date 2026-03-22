import { allColors } from "../../shared";
import { Getter } from "../types";

export const getGolangColors: Getter = (scheme) => {
	const { orange2, orange, green, red } = allColors[scheme];
	return [
		{
			scope: ["source.go storage.type"],
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: ["source.go entity.name.import"],
			settings: {
				foreground: orange,
			},
		},
		{
			scope: ["source.go keyword.package", "source.go keyword.import"],
			settings: {
				foreground: red,
			},
		},
		{
			scope: ["source.go keyword.interface", "source.go keyword.struct"],
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: ["source.go entity.name.type"],
			settings: {
				foreground: orange2,
			},
		},
		{
			scope: ["source.go entity.name.function"],
			settings: {
				foreground: green,
			},
		},
	];
};