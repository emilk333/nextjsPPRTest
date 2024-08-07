import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {

	// In-memory mock-database

	const wines = [
		{
			id: 1,
			name: "Château Margaux - 1. Cru Classé ",
			price: 400,
			year: 2013,
			image: {
				src: "https://cdn.kjaersommerfeldt.dk/products/1019384/1033200904.png",
				alt: "Château Margaux - 1. Cru Classé"
			}
		},
		{
			id: 2,
			name: "Château Lafite Rothschild - 1. Cru Classé",
			price: 450,
			year: 2013,
			image: {
				src: "https://cdn.kjaersommerfeldt.dk/products/1019382/Chteau_Lafite_Rothschild.png",
				alt: "Château Lafite Rothschild - 1. Cru Classé"
			}
		},
		{
			id: 3,
			name: "Château Cos d´Estournel -2. Cru Classé",
			price: 350,
			year: 2012,
			image: {
				src: "https://cdn.kjaersommerfeldt.dk/products/1024565/image_1570_1_313_1_792_1_3689.png",
				alt: "Château Cos d´Estournel -2. Cru Classé"
			}
		}
	]

	return NextResponse.json(wines)
}