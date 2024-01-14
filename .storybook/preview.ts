import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize({
	onUnhandledRequest: "bypass",
});

export default {
	loaders: [mswLoader],
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: "/",
			},
		},
	},
} satisfies Preview;
