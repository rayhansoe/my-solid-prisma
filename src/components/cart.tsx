import { trpc } from "~/utils/trpc";

export default function Cart() {
	const cart = trpc.example.cartItems.useQuery();
	return <div>{JSON.stringify(cart.data)}</div>;
}
