import React from 'react';
import withLayout from '../hocs/withLayout';

const ContactUs = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>
                For any query, please contact with me - <a href="mailto:manirujjamanakash@gmail.com">manirujjamanakash@gmail.com</a>
            </p>
        </div>
     );
}

export default withLayout(ContactUs);