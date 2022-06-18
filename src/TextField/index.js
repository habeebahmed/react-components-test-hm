import React from 'react';

function TextField(props) {
    console.log("Text Field", props);
    return (
        <div>
            <input type="text" value="Empty" />
        </div>
    );
}

export default TextField;