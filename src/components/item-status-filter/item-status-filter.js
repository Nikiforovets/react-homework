import React from 'react';

import './item-status-filter.css';
import { element } from 'prop-types';

class ItemStatusFilter extends React.Component{
	state = {
		btnData: [
			{name: 'All', id: 'allBtn', active: true},
			{name: 'Active', id: 'activeBtn', active: false},
			{name: 'Done', id: 'doneBtn', active: false}
		]
	}

	onClickFilter(id){
		const newBtnData = this.state.btnData.map(element => {
			element.active = false;
			if(element.id === id){
				element.active = true;
			}
			return element;
		});
		this.setState(() => {
			return {
				btnData: newBtnData
			}
		});
		this.props.onClickFilter(id);
	}

	createButtons(){
		const buttonsComponent = this.state.btnData.map(element => {
			const active = element.active;
			const className = 'btn ' + (active ? 'btn-info' : 'btn-outline-secondary');
			return <button className={className} key={element.id} onClick={() => this.onClickFilter(element.id)}>{element.name}</button>
		});
		return buttonsComponent;
	}

	render(){
		return (
			<div className='btn-group'>
				{this.createButtons()}
			</div>
		);
	}
};

export default ItemStatusFilter;
