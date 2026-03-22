import { ColorScheme } from "../shared";

type TokenColor = {
	name?: string;
	scope?: string | string[];
	settings: {
		foreground?: string;
		background?: string;
		fontStyle?: string;
	};
};

export type Getter = (scheme: ColorScheme) => TokenColor[];