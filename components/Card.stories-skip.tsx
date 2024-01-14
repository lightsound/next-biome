import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";
import contacts from "./contacts.json";

const meta = {
	component: Card,
} satisfies Meta<typeof Card>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingStory: Story = {
	args: {
		state: "loading",
	},
};

export const ErrorStory: Story = {
	args: {
		state: "error",
	},
};

export const BeyonceStory: Story = {
	args: {
		state: "loaded",
		contact: contacts.beyonce,
	},
};

export const JackBauerStory: Story = {
	args: {
		state: "loaded",
		contact: contacts.jackBauer,
	},
};

export const ChuckNorrisStory: Story = {
	args: {
		state: "loaded",
		contact: contacts.chuckNorris,
	},
};
