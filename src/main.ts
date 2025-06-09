import { workspace } from "vscode";
import config from "./vscode.json";

export const activate = () =>
	Promise.all(
		Object.entries(config).map(async ([key, value]) => {
			const set = async () =>
				workspace.getConfiguration().update(key, value, true);
			for (let i = 0; i < 30; i++) {
				try {
					await set();
					return;
				} catch (e) {
					console.error(`Failed to set configuration for ${key}:`, e);
					await new Promise((resolve) => setTimeout(resolve, 1000));
				}
			}
		}),
	);
