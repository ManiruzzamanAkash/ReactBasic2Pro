import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const withLayout = (PageComponent) => {
    return function Page() {
        const [count, setCounter] = useState(10);
        return (
            <div className="app">
                <Navbar />
                <div className="container">
                    <div>
                        { count }
                    </div>
                    <PageComponent />
                </div>
                <Footer />
            </div>
        );
    }
}

export default withLayout;