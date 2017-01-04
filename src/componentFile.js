// so that file knows what a Component is
import React, { Component } from 'react';
// has two parameters, the components its gonna render and the area its gonna render to
import ReactDOM from 'react-dom';

const person = 'Brandon';
//  JS code that gives us HTML
class MyComponent extends Component {
  // function that returns an object (HTML)
  render() {
    // returns everything, needed only once
    return (<div>

      <div>This is my list</div>
       <ul>
      {this.props.firstArray.map((other) => {
        return <li >{other}</li>
      })}
      </ul>
      
        </div>
      );
  }
}

// export the component name not file name
export default MyComponent;

