import type { Meta, StoryObj } from "@storybook/react";
import { createMock } from "storybook-addon-module-mock";

import contacts from "./contacts.json";
import * as db from "./db";
import { DbCard } from "./db-card";

const meta = {
	component: DbCard,
	parameters: {
		docs: {
			source: { type: "code" },
		},
	},
} satisfies Meta<typeof DbCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SuccessStory: Story = {
	args: { id: 1 },
	parameters: {
		moduleMock: {
			mock: () => {
				const mock = createMock(db, "findById");
				mock.mockReturnValue(Promise.resolve(contacts.beyonce));
				return [mock];
			},
		},
	},
};

export const ErrorStory: Story = {
	args: { id: -1 },
	parameters: {
		moduleMock: {
			mock: () => {
				const mock = createMock(db, "findById");
				mock.mockReturnValue(Promise.reject("Not found"));
				return [mock];
			},
		},
	},
};
