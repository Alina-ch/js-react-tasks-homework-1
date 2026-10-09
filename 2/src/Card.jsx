import React from 'react';

// BEGIN (write your solution here)
export default getCard = (object) => {
    if (!(object.title || object.text)) {
        return null;
    }

    return (
        <div className="card">
        <div className="card-body">
            {object.title && <h4 className="card-title">{object.title}</h4>}
            {object.text && <p className="card-text">{object.text}</p>}
        </div>
        </div>
    );

}
// END
