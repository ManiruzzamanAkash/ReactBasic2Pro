import React, { useEffect } from 'react';

const Test = (props) => {
    console.log(props);

    return (
        <div>
            <h2>Hello {props.name}</h2>
            <div>
                <address>
                    Village - {props.myAddress.village} <br/>
                    City - {props.myAddress.city} <br/>
                    Country - {props.myAddress.country} <br/>
                </address>
                <div>
                    <h5>Programming Languages</h5>
                    {
                        props.pl.map((p, index) => (
                            <li key={index}>{p}</li>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Test;