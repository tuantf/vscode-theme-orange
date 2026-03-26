/** Canonical palette from orange.nvim (Catppuccin mocha / latte overrides in orange.lua). */
export type ColorKey =
  | "bg0"
  | "mantle"
  | "bg1"
  | "bg2"
  | "bg3"
  | "grey"
  | "fg1"
  | "fg2"
  | "orange"
  | "orange2"
  | "blue"
  | "green"
  | "red"
  | "mauve"
  | "teal"
  | "yellow"
  | "transparent"
  | "white";

export type ColorScheme = "dark" | "light";

export const allColors: Record<ColorScheme, Record<ColorKey, `#${string}`>> = {
  dark: {
    // mocha (orange.lua)
    bg0: "#222222", // base
    mantle: "#1d1d1d", // sidebar / status (darker than base; NeoTreeNormal in orange.lua)
    bg1: "#292929", // surface0
    bg2: "#404040", // surface1
    bg3: "#595959", // overlay0 (line numbers / inactive chrome)
    grey: "#858686", // overlay1 (comments, muted)
    fg1: "#dddede", // text
    fg2: "#c6c7c7", // subtext1
    orange: "#f1833f", // peach
    orange2: "#dfa43f", // yellow (types / secondary warm)
    blue: "#7aaeac",
    green: "#95bb73",
    red: "#ea6962",
    mauve: "#dc8c98",
    teal: "#80b68a",
    yellow: "#dfa43f",
    transparent: "#0000",
    white: "#dddede", // text on saturated accents
  },
  light: {
    // latte (orange.lua)
    bg0: "#f2f2f2", // base
    mantle: "#ebebeb", // mantle — sidebar / status
    bg1: "#d6d6d6", // surface0
    bg2: "#cacaca", // surface1
    bg3: "#a8a8a8", // overlay0
    grey: "#929292", // overlay1
    fg1: "#303030", // text
    fg2: "#464646", // subtext1
    orange: "#dd7029", // peach
    orange2: "#cc9127", // yellow (types / secondary warm)
    blue: "#689c9a",
    green: "#83a861",
    red: "#d55550",
    mauve: "#c97a86",
    teal: "#6ea378",
    yellow: "#cc9127",
    transparent: "#0000",
    white: "#303030", // text on saturated accents
  },
};

// https://stackoverflow.com/a/39495173
type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;
type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export const withAlpha = (color: `#${string}`, alpha: IntRange<0, 256>) => {
  return `${color}${alpha.toString(16).padStart(2, "0")}`;
};
