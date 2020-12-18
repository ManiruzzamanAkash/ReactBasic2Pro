import React from 'react'

const UserInformation = (props) => {
    return ( 
        <>
            <h2> Class 10 </h2>
            <p>Functional Component</p>
            <hr/>
            <address>
                House: {props.address.house} <br />
                City: {props.address.city} <br />
            </address>
        </>
     );
}
 
export default UserInformation;