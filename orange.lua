-- Orange color palette reference (Catppuccin latte / mocha slot names).
-- Kept in sync with src/shared.ts allColors (canonical palette).
return {
  latte = {
    rosewater = "#d55550", -- red
    flamingo = "#d55550",
    red = "#d55550",
    maroon = "#d55550",
    pink = "#c97a86", -- mauve
    mauve = "#c97a86",
    peach = "#dd7029", -- orange
    yellow = "#cc9127",
    green = "#83a861",
    teal = "#6ea378",
    sky = "#6ea378",
    sapphire = "#6ea378",
    blue = "#689c9a",
    lavender = "#689c9a",
    text = "#303030", -- fg1
    subtext1 = "#464646", -- fg2
    subtext0 = "#6c6c6c", -- between fg2 and grey
    overlay2 = "#9d9d9d", -- between grey and bg3
    overlay1 = "#929292", -- grey
    overlay0 = "#a8a8a8", -- bg3
    surface2 = "#d0d0d0", -- between bg2 and bg1
    surface1 = "#cacaca", -- bg2
    surface0 = "#d6d6d6", -- bg1
    base = "#f2f2f2", -- bg0
    mantle = "#ebebeb",
    crust = "#e2e2e2", -- outer chrome (not in shared.ts; keep latte scale)
  },
  mocha = {
    rosewater = "#ea6962", -- red
    flamingo = "#ea6962",
    red = "#ea6962",
    maroon = "#ea6962",
    pink = "#dc8c98", -- mauve
    mauve = "#dc8c98",
    peach = "#f1833f", -- orange
    yellow = "#dfa43f",
    green = "#95bb73",
    teal = "#80b68a",
    sky = "#80b68a",
    sapphire = "#80b68a",
    blue = "#7aaeac",
    lavender = "#7aaeac",
    text = "#dddede", -- fg1
    subtext1 = "#c6c7c7", -- fg2
    subtext0 = "#a5a6a6", -- between fg2 and grey
    overlay2 = "#6f6f6f", -- between grey and bg3
    overlay1 = "#858686", -- grey
    overlay0 = "#595959", -- bg3
    surface2 = "#343434", -- between bg2 and bg1
    surface1 = "#404040", -- bg2
    surface0 = "#292929", -- bg1
    base = "#222222", -- bg0
    mantle = "#1d1d1d",
    crust = "#191919", -- below mantle
  },
}
