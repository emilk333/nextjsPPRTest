
import { useEffect, useState } from "react";

export default function useGetMiniCart() {
    const [initialCartCount, setCartAmount] = useState<number>(999)
    const [isLoading, setIsLoading] = useState<Promise<void>>();
    const url = "/api/cart/getCart"

	useEffect(() => {
        
        const getCartAmount = async () => {
            const response = await fetch(url)

            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            const data = await response.json()
            setCartAmount(data)
            
        }
        
        const x = getCartAmount().catch(console.error)
        setIsLoading(x)
	}, [])

	return {initialCartCount, isLoading}
}

