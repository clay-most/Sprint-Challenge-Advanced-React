import React from "react";

class Card extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <h4>{this.props.person.name}</h4>
        <p>has been searched {this.props.person.searches} times,</p>
        <p>and is from {this.props.person.country}.</p>
      </div>
    );
  }
}
export default Card;
