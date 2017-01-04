import React, { Component } from 'react';
import ReactDOM from 'react-dom';


////Components: snippets of code that produce HTML


// class App2 extends Component {

//   handleClick(){
//     alert('Click');
//   }

//   render () {
//     return (
//        <div>
         
//          <h1 onClick={this.handleClick}>Hello {this.props.name}!</h1>


//        </div>
//     );
//   }
// }

const App2 = React.createClass({
  render: function(){
    return (
       <div>
         
         <h1 onClick={this.handleClick}>Hello {this.props.name}!</h1>
       </div>
    )}

    
})

export default App2;



