import React from 'react';

const UserAvatar = () => {
    const userImagePath =  `https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg`;

    return ( 
        <>
            <img src={userImagePath} style={{  width: 40 }}/>
        </>
     );
}
 
export default UserAvatar;