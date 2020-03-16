import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users'
import ComponentOne from './ComponentOne'

const App = () => {
	return(
		<div>
			<h2>Hello World</h2>
			<h3><Users/></h3>
			<h3><ComponentOne/></h3>
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));