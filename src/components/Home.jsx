import React from 'react';
import withLayout from '../hocs/withLayout';

const Home = () => {
    return (
        <div>
            <h2>
                Welcome to our Ecommerce Store..
            </h2>
            <p>Please go to products to buy some...</p>
        </div>
     );
}

export default withLayout(Home);