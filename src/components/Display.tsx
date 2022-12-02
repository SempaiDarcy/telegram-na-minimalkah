import React from 'react';

type DisplayPropsType = {
    title:string
}

const Display = (props:DisplayPropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <input/>
            <button>send</button>
            <button>clear</button>
        </div>
    );
};

export default Display;