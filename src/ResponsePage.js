import React from 'react';

function ResponsePage(props) {
    const responseJson = props.location.state.response;

    return (
        <div>
            <h1>JSON:</h1>
            <pre>{JSON.stringify(responseJson, null, 2)}</pre>
        </div>
    );
}

export default ResponsePage;