import React, { memo } from 'react'

const Footer = ({ data }) => {
    console.log('Enter Footer');

    return ( 
        <div>
            <hr />
            {data}
            <br />
            @copy; 2021 All rights reserved.
            Get some data from database...
        </div>
     );
}
 
export default memo(Footer);