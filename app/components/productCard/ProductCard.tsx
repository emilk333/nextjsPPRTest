import Image from "next/image";
import { IWine } from "@/app/globalHooks/wines/types";
import { AddForm } from "../forms/AddForm";

export default function ProductCard(wine : IWine) {
	return (
		<article>   
            <div className="bg-slate-300 rounded-lg flex justify-center items-center">
                <figure className="-mb-10 mt-4">
                <Image width={100} height={300} src={wine.image.src} alt={wine.image.alt}/>
                </figure>
            </div>
            <section className="p-2 space-y-3 mt-2">
                <div className="flex justify-between">
                    <p>{wine.year}</p>
                    <p>{wine.price}€</p>
                </div>
                <div className="flex justify-between">
                    <p className="shrink-1 max-w-[70%]">{wine.name}</p>
                    <AddForm productId={wine.id}/>
                </div>
            </section>
        </article>
	)
}
