import type { ComponentProps } from "react";
import { Card } from "./card";

export async function ApiCard({ id }: { id: number }) {
	let props: ComponentProps<typeof Card>;
	try {
		const res = await fetch(`https://myapi.com/users/${id}`);
		const contact = await res.json();
		props = { state: "loaded", contact };
	} catch (_e) {
		props = { state: "error" };
	}
	return <Card {...props} />;
}
