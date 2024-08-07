import { Suspense } from "react";
import MiniCart from "../cart/MiniCart";
import Loading from "../loading/Loading";

export default function Navigation() {
	return (
		<nav className="flex justify-between p-4">
            <div className="min-w-36 h-full text-xl">
                logo
            </div>
			<ul className="flex space-x-8">
				<li>Link 😜</li>
				<li>Link 🏖</li>
				<li>Link 🍿</li>
			</ul>
            <div className="min-w-36">
				<Suspense fallback={<Loading />}>
					<MiniCart />
				</Suspense>
            </div>
		</nav>
	);
}
