import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component {
  state = {
    User: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.User;
    const req = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await req.json();
    const dataSliced = data.slice(0, 5);
    this.setState({ Users: dataSliced });
    console.log(dataSliced);
  };

  render() {
    const User = this.state.User;
    return (
      <div className="container">
        <div>
          <img src={User.url} alt={User.title} />
          <h3>{User.title}</h3>
          <h4>
            Publisher: <span>{User.id}</span>
          </h4>

          <button className="user_button">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default User;
