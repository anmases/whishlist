import React from "react";
import PropTypes from 'prop-types';
import WishItem from "../WishItem";

const WishList = ({ wishes, onWishesChange })=>(
	<ul className="wish-list">
			{wishes.map(({text, done}, i) => (
					<WishItem 
						key={text} 
						text={text} 
						id={`wish${i}`} 
						done={done} 
						onDoneChange={(value)=>{
							const updatedWishes = [...wishes];
							updatedWishes[i].done = value;
							onWishesChange(updatedWishes);
						}}
					/>
				))
			}
	</ul>
);

WishList.propTypes = {
	wishes: PropTypes.arrayOf(PropTypes.shape(WishItem.propTypes)),
	onWishesChange: PropTypes.func
};
WishList.defaultProps = {
	wishes: [],
	onWishesChange: ()=>{}
};

export default WishList;