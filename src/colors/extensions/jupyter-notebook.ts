import { ColorScheme, allColors } from "../../shared";

export const getJupyterNotebookColors = (scheme: ColorScheme) => {
	const colors = allColors[scheme];
	const { bg1, grey, bg2 } = colors;

	return {
		"notebook.cellEditorBackground": bg1,
		"notebook.focusedCellBorder": grey,
		"notebook.cellBorderColor": bg2,
		"notebook.focusedEditorBorder": bg2,
	};
};