import React from 'react'
import ReactDOM from 'react-dom'

import ComponentTwo from './ComponentTwo'
class ComponentOne extends React.Component {
	render(){
		return (
			<div>
				<h3>This is from Component One </h3>
        <ComponentTwo/>
			</div>
		)
	}
}

export default ComponentOne;