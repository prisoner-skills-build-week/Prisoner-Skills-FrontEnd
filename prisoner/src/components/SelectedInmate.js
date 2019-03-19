import React from 'react';
import {Button} from 'reactstrap';

export default function SelectedInmate(props) {
    return (
        <div>
            <h4>{props.selected.name}</h4>
            <span onClick={() => props.handleShowInmate({})}>X</span>
            <div className="single-description">{props.selected.despcription}</div>
            <div className="single-shipping">{props.selected.shipping}</div>
            <Button color="info" onClick={() => props.handleDeleteInmate()}>Delete</Button>{' '}
            <Button color="info" onClick={() => props.toggleShowUpdate()}>Update</Button>
        </div>
    )
}