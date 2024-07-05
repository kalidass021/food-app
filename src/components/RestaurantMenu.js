import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState(null);
	const {resId} = useParams();
	console.log('resId', resId);
	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		try {
			const data = await fetch(`${MENU_API}${resId}`);
			const json = await data.json();
			setResInfo(json);
			console.log("json", json);
		} catch (err) {
			console.error(`Error while fetching menu ${err}`);
			throw err;
		}
	};

	// if (resInfo === null)
	if (!resInfo) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		resInfo?.data?.cards[2]?.card?.card?.info || {};

	// console.log('name', name, 'cuisines', cuisines, 'costForTwoMessage', costForTwoMessage);

	const { itemCards } =
		resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
			?.card || {};
	console.log("itemCards", itemCards);

	return (
		<div className="menu">
			<h1>{name}</h1>
			<p>
				{cuisines.join(", ")} - {costForTwoMessage}
			</p>
			<h2>Menu</h2>
			<ul>
				{itemCards.map((itemCard) => (
					<li key={itemCard.card.info.id}>
						{console.log('itemCard', itemCard)}
						{itemCard.card.info.name} - {"Rs."} {itemCard.card.info.price / 100}
					</li>
				))}
				{/* <li>{itemCards[0].card.info.name}</li>
				<li>{itemCards[1].card.info.name}</li>
				<li>{itemCards[2].card.info.name}</li> */}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
