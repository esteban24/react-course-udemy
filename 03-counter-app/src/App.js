import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

const App = ({ greeting, subtittle }) => {

    return (
        <>
            <h2>{ greeting }</h2>
            {/* <h1>{ message.name }, { message.age }</h1> */}
            {/* <pre>{ JSON.stringify(message, null, 3) }</pre> */}
            <p>{ subtittle }</p>
        </>
    );
}

/**
 * Forces greeting property to be passed as argument and checks wheter is string or not
 */
App.propTypes = {
    greeting: PropTypes.string.isRequired
}

App.defaultProps = {
    subtittle: 'First React Component'
}

export default App;