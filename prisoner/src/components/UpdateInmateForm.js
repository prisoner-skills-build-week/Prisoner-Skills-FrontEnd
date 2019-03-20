import React from 'react';

const UpdateFriendForm = props => {
    return (
        <form>
            <input placeholder={props.inmate.name} />
            <input placeholder={props.inmate.description} />
            <input placeholder={props.inmate.shipping} />
        </form>
    )
}

export default UpdateFriendForm