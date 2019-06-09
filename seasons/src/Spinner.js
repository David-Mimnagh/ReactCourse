import React from 'react';

const Spinner = (props) => {
  return(
    <div className="ui active dimmer">
        <div className="ui big text loader">{props.waitMessage}</div>
    </div>
  );
};

Spinner.defaultProps ={
  waitMessage: "Loading..."
};
export default Spinner;