import React, { useEffect, useState } from 'react';
/**
 * Modificar estado en componentes funcionales con Hooks
 * @returns 
 */
const MyComponent = () => {
  const [count, setCount] = useState(0);
	//lógica tras el cambio de estado de la variable count.
	//Esta función equivale al componentDidMount y componentDidUpdate
	useEffect(
		()=>{
			const interval = setInterval(()=>setCount(c=>c+1), 1000);
			return ()=>clearInterval(interval);  //Con esto se equivaldría al componentWillUnmount
		},
		[] //con esto equivalndría al shouldComponentUpdate
	);

	const increment = (amount) => {
    setCount(prevCount => prevCount + amount);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => increment(1)}>Increment</button>
    </div>
  );
}
