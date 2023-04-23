import { useEffect, useState } from "react";
import { Client } from "@petfinder/petfinder-js";

function PetApi() {
    const [location, setLocation] = useState([]);
	const [dogs, setDogs] = useState([]);
	const [cats, setCats] = useState([]);
	const [birds, setBirds] = useState([]);

	useEffect(() => {
		//new Client does a fetch call to the petfinder API for authorization
		const client = new Client({
			apiKey: process.env.REACT_APP_API_KEY,
			secret: process.env.REACT_APP_SECRET_KEY,
		});
		const fetchAnimalData = async () => {
			//once authorized, you can do fetch call for animal information
			const dogData = await client.animal.search({ type: "Dog" });
			const catData = await client.animal.search({ type: "Cat" });
			const barnyardData = await client.animal.search({ type: "Barnyard" });

			setDogs(dogData.data.animals);
			setCats(catData.data.animals);
			setBarnyard(birdData.data.animals);

			//  client.animal.search({ type: "Dog" }).then((response) => {
			//  	console.log("thenables", response.data);
			//  });
		};
		fetchAnimalData();
	}, []);
	return (
		<div className="App">

          


			<h1>Pets</h1>
			{dogs.map((dog) => {
				return (
					<div key={dog.id}>
						<h2>{dog.name}</h2>
						{dog.primary_photo_cropped !== null && (
							<img src={dog.primary_photo_cropped.full} />
						)}
					</div>
				);
			})}
		</div>
	);
}

export default PetApi;