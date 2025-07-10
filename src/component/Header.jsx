import React from 'react';

const Header = (props) => {
    return (
        <div>
            <ul>
                <li>{props.itemob['name']}</li>
                <li>{props.itemob['age']}</li>
                <li>{props.itemob['city']}</li>
                <li>{props.itemob['phone']}</li>
            </ul>
        </div>
    );
};

export default Header;