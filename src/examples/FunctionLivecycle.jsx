import React, { useEffect, useState } from 'react';

const FullName = ({name, surname})=>{
	const [fullName, setFullName] = useState();
	//Se ejecuta cada vez que cambia el estado de name o de surname.
	useEffect(
		()=>setFullName(`${name} ${surname}`),
		[name, surname]
	);

	return (<div>Hello {fullName}</div>);
};