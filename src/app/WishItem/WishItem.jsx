import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const WishItem = ({done, text, id, onDoneChange})=> {
	const [age, setAge] = useState(0);

	useEffect(()=>{
		let ageInterval;
		if(done){
			setAge(0);
		}else{
			ageInterval = setInterval(()=>{
				if(done){
					clearInterval(ageInterval);
				}
				setAge(prev => prev + 1);
			}, 1000);
		}
		return (()=> clearInterval(ageInterval)); //Cuando se destruye el componente
	}, [done]);

	return (
		<li className={classNames('wish-list__item', {
			'wish-list__item--done':done,
			'wish-list__item--warning': age >= 5 && age < 10,
			'wish-list__item--danger': age >= 10
			})}>
			<input id={id} type="checkbox" checked={done} onChange={e => onDoneChange(e.target.checked)}/>
			<label htmlFor={id}>{text}</label>
		</li>
	);
};

WishItem.propTypes = {
	done: PropTypes.bool,
	text: PropTypes.string,
	id: PropTypes.string,
	onDoneChange: PropTypes.func
};
WishItem.defaultProps = {
	done:false,
	text: '',
	id: '',
	onDoneChange: ()=>{}
};
export default WishItem;