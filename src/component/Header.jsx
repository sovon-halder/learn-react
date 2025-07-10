import React from 'react';

const Header = (props) => {
    return (
<div>
    <button onClick={props.alertBtn}>submit</button>
</div>
    );
};

export default Header;