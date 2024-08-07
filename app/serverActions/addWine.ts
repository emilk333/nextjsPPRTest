"use server";
import { revalidatePath } from "next/cache";

export async function addWine(
	prevState: { message: any } | null,
	formData: FormData
) {
	const url = "http://localhost:3000/api/cart/addToCart";

	try {
		// In the real world, one would make a db call here and not chain api calls to server.
		const response = await fetch(url, {
			method: "POST",
			body: formData.get("productId"),
		});
		
		const cartItems = await response.json();
		
		revalidatePath("/");

		return { message: cartItems };
	} catch (e) {
		return { message: "Failed to add to cart" };
	}
}
