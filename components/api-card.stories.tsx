import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";

import { ApiCard } from "./api-card";
import contacts from "./contacts.json";

const meta = {
	component: ApiCard,
	parameters: {
		docs: {
			source: { type: "code" },
		},
	},
} satisfies Meta<typeof ApiCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SuccessStory: Story = {
	args: { id: 1 },
	parameters: {
		msw: {
			handlers: [
				http.get("https://myapi.com/*", () =>
					HttpResponse.json(contacts.beyonce),
				),
			],
		},
	},
};

export const ErrorStory: Story = {
	args: { id: -1 },
	parameters: {
		msw: {
			handlers: [http.get("https://myapi.com/*", () => HttpResponse.error())],
		},
	},
};
