import React from "react";

const Users = props => (
  <div>
    {props.getDetails.map(recipe => {
      return (
        <div key={recipe.id}>
          <h5 className="title">{recipe.title}</h5>
          <img className="img" src={recipe.url} alt={recipe.title} />
        </div>
      );
    })}
  </div>
);

export default Users;
