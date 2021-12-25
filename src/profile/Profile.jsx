import React from 'react';

function Profile  (props)  {
    return (
        <div>
            <h1>{props.fullname}</h1>
            <h1>{props.bio}</h1>
            <h1>{props.prof}</h1>
            <img src={props.children} alt='me'></img>
            <button onClick={props.hudle}>Click my name</button>
            
        </div>
    );
}

export default Profile;
