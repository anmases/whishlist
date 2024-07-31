import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

ReactDom.render(<App/>, document.getElementById("root"));


/*
PURE JS:
React.createElement(
	'h1',
	{className: 'header'},
	'hello world'
);
JSX:
<h1 className='header'>Hello World</h1>
*/