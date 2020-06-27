import React, { Component,Suspense  } from "react";
import "./styles.css";
import Form from "./Components/Search";


//dyanamic Import using Lazy()
const Users = React.lazy(() => import('./Components/Users'));

export default class App extends Component {
  state = {
    Users: []  //State defining
  };

  getUsers = async e => {
    e.preventDefault();
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    const dataSliced = data.slice(0,10); // I Sliced API data to the 10 Arrays
    this.setState({ Users: dataSliced });
    console.log(dataSliced);  
  };

  render() {
    return (

        <div className="App">
            <h1 className="header">Welcome,Rest API</h1>
            <Form getImage={this.getUsers}/>
              <Suspense fallback={<div className="Load">Loading...</div>}>
                <Users getDetails={this.state.Users}/>
             </Suspense>
        </div>

    );
  }
}
