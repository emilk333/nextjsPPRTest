import ProductCard from "./components/productCard/ProductCard";
import Grid from "./components/grid/Grid";
import { useGetWines } from "./globalHooks/wines/useGetWines";
import { IWine } from "./globalHooks/wines/types";

export default async function Home() {

	const wines: IWine[] = await useGetWines()

	return (
		<main className="flex items-center flex-col">
			<div className="max-w-screen-xl w-full">
				<Grid>
					{wines.map((wine, index) => (
						<li key={index}>
							<ProductCard {...wine}/>
						</li>
					))}
				</Grid>
			</div>
		</main>
	);
}
