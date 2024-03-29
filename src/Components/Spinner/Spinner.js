import React from 'react';

const Spinner = () =>  {
    return (
        <div className="d-flex align-items-center flex-column">
            <h2 role="status">Loading...</h2>
            <div className="spinner-border" aria-hidden="true"></div>
        </div>

    );
}

export default Spinner;