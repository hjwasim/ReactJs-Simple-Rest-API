import React, { Component,Suspense  } from "react";
import "./styles.css";
import Form from "./Components/Search";

const Users = React.lazy(() => import('./Components/Users'));

export default class App extends Component {
  state = {
    Users: []
  };

  getPic = async e => {
    e.preventDefault();
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    const dataSliced = data.slice(0,10);
    this.setState({ Users: dataSliced });
    console.log(dataSliced);
  };

  render() {
    return (

        <div className="App">
            <h1 className="header">Hello,Hjwasim Rest API</h1>
            <Form getImage={this.getPic}/>
              <Suspense fallback={<div>Loading...</div>}>
                <Users getDetails={this.state.Users}/>
             </Suspense>
        </div>

    );
  }
}
