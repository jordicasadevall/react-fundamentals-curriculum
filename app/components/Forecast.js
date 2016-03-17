var React = require('react');

function Forecast (props) {
    console.log(props)
    return props.isLoading === true
        ? <div> Loading </div>
        : <div>Forecast component</div>
}

module.exports = Forecast;