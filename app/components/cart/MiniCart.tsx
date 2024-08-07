'use client'

import { useCartCount } from "./cartCountContext";
import useGetMiniCart from "./useGetMiniCart";

export default function MiniCart() {

    // This approach with having both 
    // a) getting the "truth" from the server on load and 
    // b) updating the new "truth" from the response from the server actions 
    // is fucking stupid. 
    const {initialCartCount, isLoading} = useGetMiniCart()
    const [itemsInCart] = useCartCount(initialCartCount);

    // More funny stuff - Since MiniCart is wrapped in Suspense, it will only show LoadingBoundary 
    // when the fetch call is ongoing and since html render happens before, this is not really a good
    // use case for suspense? SUSPENSE ONLY MAKES SENSE TO USE AFTER INITAL PAGE LOAD
    return (
        <div>
            {isLoading?.then(() => {
                return `Items in cart: ${itemsInCart}`
            })}
        </div>
    )
}