'use client'

import { useActionState, useEffect } from "react";
import SubmitButton from "../buttons/SubmitButton";
import { addWine } from "@/app/serverActions/addWine";
import { useCartCount } from "../cart/cartCountContext";

export function AddForm({ productId }: { productId: number }) {
    const initialState = {
        message: null
    }

    // NOTE TO SELF - DO NOT USE SERVER ACTIONS AND FORMS IF YOU WANT THE DATA
    // RETURNED AND USED FOR OPTIMISTIC RENDER I OTHER COMPONENTS.
    //
    // FORMS AND SERVER ACTIONS ARE FOR COMPONENTS WHERE YOU NEED THE STATE LOCALLY
    // THIS SHIT IS WHAT YOU HAVE TO DO IF YOU WANT THAT DATA TO FLOW ELSE WHERE  
    //
    // ALTERNATIVELY YOU'D HAVE TO HARD REFRESH THE ENTIRE PAGE TO GET THE NEW STATE AND TRIGGER A 
    // USEEFFECT IN ANOTHER CLIENT COMPONENT. THIS SHOULD WORK, HOWEVER REVALIDATEPATH() DOESN'T WORK .. 

    const [state, formAction] = useActionState(addWine, initialState)
    const [cartItemCount, setCartItemCount] = useCartCount(0);

    useEffect(() => {
        if (state.message) {
            setCartItemCount(state?.message);
        }
    }, [state])
    
    return (
        <form action={formAction}>
            <label className="hidden" htmlFor="todo">Hack to test server actions for forms</label>
            <input type="hidden" readOnly value={productId} id="productId" name="productId" />
            <SubmitButton />
        </form>
    ) 
}