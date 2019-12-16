import React from "react";
// import useAPI from "./hooks/useAPI";
import axios from "axios";
import Card from "./Card";

class List extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  //   componentDidMount() {
  //     this.setState({players:(useAPI(`http://localhost:5000/api/players`))})
  // }
  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(res => {
      this.setState({ players: res.data });
    })
    .catch(err=>{console.log("error",err)});
  }

  render() {
    if (this.state.players) {
      return (
        <div>
          <div>
            {this.state.players.map(person => {
              return (
                <Card person={person} key={person.id}>
                  {console.log(person)}
                </Card>
              );
            })}
          </div>
        </div>
      );
    }
    {
      return <div>woops</div>;
    }
  }
}

export default List;
