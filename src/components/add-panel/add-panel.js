import React from 'react';

import './add-panel.css'

class AddPanel extends React.Component { 
    state = {
        label: ''
    };

    onChange(e){
        this.setState({label: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({label: ''});
    }

    render(){
        return(
            <form className='mt-2 d-flex' onSubmit={this.onSubmit}>
                <input type='text' className='form-control' value={this.state.label} onChange={(e) => this.onChange(e)}></input>
                <button className='btn btn-secondary ml-2'>Add</button>
            </form>
        );
    }
}

export default AddPanel;