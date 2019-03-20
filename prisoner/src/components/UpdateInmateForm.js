import React from 'react';
import { updateSingleInmate } from '../actions';


const UpdateFriendForm = props => {
    return (
        <form>
            <input placeholder={props.inmate.name} />
            <input placeholder={props.inmate.price} />
            <input placeholder={props.inmate.imageUrl} />
            <input placeholder={props.inmate.description} />
            <input placeholder={props.inmate.shipping} />
            <button color="info" onClick={() => updateSingleInmate()}>Submit update</button>
        </form>
    )
}

export default UpdateFriendForm