import mockCart from '@/app/mockDataBase/cart'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {

    // This is silly - because of the hack by only storing the id of the items in the cart,
    // we can only send the amount and not the wines themselves. This approach is for testing only. 
    const items = mockCart.getAmountOfItems()
	return NextResponse.json(items)
}