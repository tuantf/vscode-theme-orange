# Orange Theme

A warm, grey-tinted VS Code theme with rich peach and yellow accents. Workbench colors, syntax highlighting, and integrated terminal are generated from a single palette aligned with [orange.nvim](https://github.com/catppuccin/nvim)–style Catppuccin overrides (mocha / latte).

## Themes

| Label        | UI   | Output                         |
| ------------ | ---- | ------------------------------ |
| **Orange Dark**  | Dark | `themes/orange-dark.json`  |
| **Orange Light** | Light | `themes/orange-light.json` |

## Installation

**From the Marketplace** (when published), open Quick Open (`Ctrl+P` / `⌘P`), run:

```
ext install tuantf.orange
```

**From a VSIX** (local build):

```sh
code --install-extension ./orange-*.vsix
```

## Development

Requirements: Node or [Bun](https://bun.sh), plus dev dependencies.

```sh
npm install   # or: bun install
npm run build # or: bun run build — writes themes/*.json from src/
```

- `npm run dev` — watch `src/main.ts` and regenerate themes on change.
- `npm run lint:check` / `npm run format:check` — quality checks.

Palette and semantic tokens live in `src/shared.ts`, `src/colors/`, and `src/token-colors/`. Edit TypeScript sources, then run `build`; do not hand-edit the generated JSON under `themes/` unless you know why.

## Credits

- Palette inspired by Catppuccin **mocha** / **latte** color overrides used in `orange.lua` (Neovim).
- Originally derived from community orange VS Code themes; this fork is maintained by [tuantf](https://github.com/tuantf).

## License

See [LICENSE](LICENSE).
