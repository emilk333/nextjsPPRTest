

function useGetWines() {
	const url = "http://localhost:3000/api/wines";

	const fetchWines = async () => {

		const response = await fetch(url, {method: 'GET'});

		if (!response.ok) {
			const message = `An error has occured: ${response.status}`;
			throw new Error(message);
		}

		return await response.json();
	};

	return fetchWines().catch(console.error);
}

export { useGetWines };
