import React from 'react'

const Day16Comp = ({ address }) => {

    // Destructuring
    const { vill = "N/A", house, phone } = address;

    const numbers = [0, 1, 2];
    const anotherNumber = 190;

    // Spread Operator
    const allNumbers = [ ...numbers, anotherNumber  ];

    const newAllNumbers = [ 100, ...allNumbers, 200 ];

    console.log('allNumbers :>> ', allNumbers);
    console.log('newAllNumbers :>> ', newAllNumbers);


    const point = {
        x : 1,
        y: 2
    }

    const pointMore = {
        ...point, z: 3
    }
    console.log('pointMore :>> ', pointMore);

    // rest Operator

    const sum = ( ...numbers ) => {
        let total = 0;
        numbers.forEach(n => total += n);
        return total;
    }

    return ( 
        <div>
             Address: 
             <br/>
             {vill}
             <br/>
             {house}
             <br/>
             {phone}
             <br />
             {
                 sum(1, 2, 5)
             }
        </div>
     );
}
 
export default Day16Comp;