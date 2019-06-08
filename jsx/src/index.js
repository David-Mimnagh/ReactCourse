//Import the React and REACTDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

//Create a React component
const App = () => {
    const nameLabel = "Enter Name: ";
    const buttonText = {text: 'Click me!'};
    return (
        <div>
            <label htmlFor="name" className="label">{nameLabel}</label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
        </div>
  );
};

//Take the react component and show it on the screen. test
ReactDOM.render(
  <App />,
  document.querySelector('#root')  
);