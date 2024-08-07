
export async function withDelay<T>(
    promise: () => Promise<T>
  ): Promise<T> {
    // Ensure we throw if this throws
    const ret = await promise;
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(ret());
      }, 1600);
    });
  }

export default function MiniCart() {

    // This approach with having both 
    // a) getting the "truth" from the server on load and 
    // b) updating the new "truth" from the response from the server actions 
    // is fucking stupid. 
    const url = "http://localhost:3000/api/cart/getCart"

    //const {initialCartCount, isLoading} = useGetMiniCart()
    //const [itemsInCart] = useCartCount(initialCartCount);

    // More funny stuff - Since MiniCart is wrapped in Suspense, it will only show LoadingBoundary 
    // when the fetch call is ongoing and since html render happens before, this is not really a good
    // use case for suspense? SUSPENSE ONLY MAKES SENSE TO USE AFTER INITAL PAGE LOAD

    // IGNORE THE THING ABOVE. IT ONLY MAKES SENSE FOR CLIENT COMPONENTS. IT WORKS FINE ON SERVER COMPONENTS

    const cartAmount = async () => {
        const response = await fetch(url)

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json()
        return data
    }

    const itemsInCart = withDelay(cartAmount)
    
    return (
        <div>
            Items in cart: {itemsInCart}
        </div>
    )
}