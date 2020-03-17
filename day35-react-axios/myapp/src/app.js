import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users'
import Posts from './Posts'

const App = () => {
	return(
		<div>
			<h3><Users/></h3>
			<h3><Posts/></h3>
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));