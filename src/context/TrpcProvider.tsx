import { JSX } from "solid-js";
import { trpc, queryClient } from "~/utils/trpc";

export default function TrpcProvider(props: { children: JSX.Element }) {
	return <trpc.Provider queryClient={queryClient}>{props.children}</trpc.Provider>;
}
