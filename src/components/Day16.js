import React from 'react'
import Day16Comp from './Day16Comp';

const Day16 = () => {

    // Object destructuring
    const address = {
        // vill: 'Mohakhali',
        house: '87/ka',
        phone: '01912'
    }

    const { vill = 'N/A', house, phone } = address;

    // Array Destructuring
    const users = [, "dip", "Test 3", "Important User"];
    console.log('users[0] :>> ', users[0]);
    console.log('users[1] :>> ', users[1]);

    const [ firstUser = "N/A", secondUser, , importantUser ] = users;

    console.log('users[0]  firstUser :>> ', firstUser);
    console.log('users[1]  secondUser :>> ', secondUser);
    console.log('users[3]  importantUser :>> ', importantUser);


    return ( 
        <>
            Day 16
            <br />
            {/* {"Village: "+vill}
            <br />
            {house}
            <br />
            {phone} */}
            {/* <Day16Comp address = {address} /> */}
            <Day16Comp address={address} />
        </>
     );
}
 
export default Day16;