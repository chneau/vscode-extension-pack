import { workspace } from "vscode";
import config from "./vscode.json";

export const activate = async () => {
	const configuration = workspace.getConfiguration();
	for (const [key, value] of Object.entries(config)) {
		await configuration.update(key, value, true);
	}
};
