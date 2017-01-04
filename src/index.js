import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App2 from './app2.js';
import MyComponent from './componentFile.js';
import './index.css';
// import logo from './logo.svg';
// import './App.css';



////Components: snippets of code that produce HTML
var name = "Aaron";

class App extends Component {

  render() {
    return (
      <h1 className="title">Hello {name}!</h1>
    );
  }
}



//ReactDOM.render takes a component's generated HTML and puts it on the page (in the DOM)
ReactDOM.render(
<div> 
  <App/>
  <App2 name="bob" />

  <MyComponent firstArray={["item1","item2","item3"]}>
  </MyComponent>
</div>,
  document.getElementById('root2')
);

