import React from 'react';

const Hero=(props)=> {
    return (
        <div>
            <ul>
                <li>Name:{props.item['name']}</li>
                <li>Age:{props.item['age']}</li>
                <li>Des:{props.item['des']}</li>
            </ul>
            
        </div>
    );
};

export default Hero;