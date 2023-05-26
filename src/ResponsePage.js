import React from 'react';

function ResponsePage({ responseJson }) {
    return (
        <div>
            <h1>JSON:</h1>
            <pre>{JSON.stringify(responseJson, null, 2)}</pre>
        </div>
    );
}

export default ResponsePage;