import React from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends React.Component{
	onClickFilter = (e) => {
		this.props.onClickFilter(e.target.id);
		e.target.parentNode.childNodes.forEach(elem => { // не уверен что так можно
			elem.className = 'btn btn-outline-secondary'; 
		});
		e.target.className = 'btn btn-info';
	}

	render(){
		return (
			<div className='btn-group'>
				<button type='button' id='allBtn' className='btn btn-info' onClick={this.onClickFilter}>
					All
				</button>
				<button type='button' id='activeBtn' className='btn btn-outline-secondary' onClick={this.onClickFilter}>
					Active
				</button>
				<button type='button' id='doneBtn' className='btn btn-outline-secondary' onClick={this.onClickFilter}>
					Done
				</button>
			</div>
		);
	}
};

export default ItemStatusFilter;
