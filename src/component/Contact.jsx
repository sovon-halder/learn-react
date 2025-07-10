import React from 'react';
import Footer from './Footer';

const Contact = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.dis}</p>
        </div>
    );
};

export default Contact;