import { workspace } from "vscode";
import config from "./vscode.json";

export const activate = () =>
	Promise.all(
		Object.entries(config).map(([key, value]) =>
			workspace.getConfiguration().update(key, value, true),
		),
	);
