import { workspace } from "vscode";
import config from "./vscode.json";

export const activate = async () => {
	for (const [key, value] of Object.entries(config)) {
		await workspace.getConfiguration().update(key, value, true);
	}
};

export const deactivate = () => {};
