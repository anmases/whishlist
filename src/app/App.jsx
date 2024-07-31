import React, { useState } from "react";
import './App.css';
import WishList from "./WishList";
import WishInput from "./Wishinput";

const initialWishes = [
	{text: 'travel to the moon', done: false},
	{text: 'Pay the gym', done: true},
	{text: 'go to the gym', done: true}
];

const App = ()=> {
	const [wishes, setWishes] = useState(initialWishes);

	return (
		<div className="app">
			<h1>My Wish list</h1>
			<WishInput onNewWish={wish => setWishes([...wishes, wish])}/>
			<WishList wishes={wishes} onWishesChange={setWishes}/>
			<button type="button" className="wish-clear" onClick={()=> setWishes(wishes.filter(wish => !wish.done))}>
				Archive done
			</button>
		</div>
	);
}

export default App;