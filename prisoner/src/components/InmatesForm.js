import React from 'react';
import {connect} from 'react-redux';
import {createData} from '../actions'

class InmateForm extends React.Component {


    state = {
            name: '',
            price: '',
            imageUrl: '',
            description: '',
            shipping: ''
    }

    handleInputChanges = e => {
        e.persist();
        this.setState(prevState => ({ 
            ...prevState.prison,
            [e.target.name]: e.target.value }))
    }

    handleAddInmate = e => {
        e.preventDefault()
        const {name, price, imageUrl, description, shipping } = this.state;
        this.props.createData({ name, price, imageUrl, description, shipping});
        this.setState({name: '', price: '', imageUrl: '', description: '', shipping: '' })
    };

    render() {
        return (
            <form>

                <input 
                    value={this.state.name}
                    name='name'
                    type='text'
                    placeholder='name'
                    onChange={this.handleInputChanges}
                />
                <input 
                    value={this.state.price}
                    name='price'
                    type='text'
                    placeholder='price'
                    onChange={this.handleInputChanges}
                />
                <input 
                    value={this.state.imageUrl}
                    name='imageUrl'
                    type='text'
                    placeholder='imageUrl'
                    onChange={this.handleInputChanges}
                />
                <input 
                    value={this.state.description}
                    name='description'
                    type='text'
                    placeholder='description'
                    onChange={this.handleInputChanges}
                />
                <input 
                    value={this.state.shipping}
                    name='shipping'
                    type='text'
                    placeholder='shipping'
                    onChange={this.handleInputChanges}
                />
            
            <button onClick={this.handleAddInmate}>Add Inmate</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingData: state.creatingData
    };
};

export default connect(mapStateToProps, {createData} )(InmateForm)