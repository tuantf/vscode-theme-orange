# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Orange Theme is a VS Code extension providing dark and light color themes with warm, grey-tinted tones and peach/yellow accents. The palette is aligned with Catppuccin mocha/latte overrides.

## Development Commands

```bash
bun install        # Install dependencies
bun run build      # Generate themes/*.json from TypeScript sources
bun run dev        # Watch mode - regenerate on file changes
bun run package    # Create VSIX package (outputs orange-*.vsix)
bun run type:check # TypeScript type checking
bun run lint:check # ESLint
bun run format:check # Prettier
```

## Architecture

**Generated output** - Do NOT hand-edit `themes/orange-dark.json` or `themes/orange-light.json`. These are generated from TypeScript sources.

**Color palette** (`src/shared.ts`):

- `allColors` - Central palette with `dark` (mocha) and `light` (latte) variants
- Colors: bg0-bg3, mantle, grey, fg1-fg2, orange, orange2, blue, green, red, mauve, teal, yellow

**Theme generation** (`src/main.ts`):

- `generateJson()` - Assembles tokenColors, colors, and semanticTokenColors
- `run()` - Writes JSON files to `themes/`

**Workbench colors** (`src/colors/`):

- `base.ts` - Core VS Code UI colors (editor, sidebar, tabs, terminal, etc.)
- `extensions/` - Extension-specific colors (GitLens, Jupyter Notebook)

**Syntax highlighting** (`src/token-colors/`):

- `base.ts` - Base token colors (comments, strings, keywords, etc.)
- `languages/*.ts` - Language-specific overrides (Python, JS/TS, Go, etc.)

**Semantic tokens** (`src/semantic-colors.ts`):

- Provides richer highlighting via language servers

## Adding Language Support

1. Create `src/token-colors/languages/<lang>.ts`
2. Export a `Getter` function returning `TokenColor[]`
3. Import and spread into `tokenColors` array in `src/main.ts`

## Getter Type Pattern

```typescript
type Getter = (scheme: ColorScheme) => TokenColor[];
```

All color functions use this pattern - they receive the scheme (`"dark"` | `"light"`) and return theme-appropriate colors from `allColors[scheme]`.
