import mockCart from '@/app/mockDataBase/cart'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = true

export async function POST(req: NextRequest) {
    const requestData = await req.json()
    mockCart.addToCart(requestData)
    revalidatePath('/')
    return NextResponse.json(mockCart.getAmountOfItems())
}