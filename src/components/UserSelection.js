import React, { Component } from "react";
import { Dropdown, Button } from "semantic-ui-react";

class UserSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendOptions: [
        {
          key: "Jenny Hess",
          text: "Jenny Hess",
          value: "Jenny Hess",
          image: {
            avatar: true,
            src: "https://via.placeholder.com/150/92c952"
          }
        },
        {
          key: "Elliot Fu",
          text: "Elliot Fu",
          value: "Elliot Fu",
          image: { avatar: true, src: "https://via.placeholder.com/150/92c952" }
        },
        {
          key: "Stevie Feliciano",
          text: "Stevie Feliciano",
          value: "Stevie Feliciano",
          image: { avatar: true, src: "https://via.placeholder.com/150/92c952" }
        },
        {
          key: "Christian",
          text: "Christian",
          value: "Christian",
          image: { avatar: true, src: "https://via.placeholder.com/150/92c952" }
        },
        {
          key: "Matt",
          text: "Matt",
          value: "Matt",
          image: { avatar: true, src: "https://via.placeholder.com/150/92c952" }
        },
        {
          key: "Justen Kitsune",
          text: "Justen Kitsune",
          value: "Justen Kitsune",
          image: { avatar: true, src: "https://via.placeholder.com/150/92c952" }
        }
      ],

      users: []
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ users: responseJson });
        console.log(this.state.users);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let optionItems = this.state.users.map(user => (
      <option key={user.username}>{user.username}</option>
    ));
    return (
      <div className="User-selection">
        <Dropdown placeholder="Select User" selection options={optionItems} />
        <Button color="green">Get Albums</Button>
      </div>
    );
  }
}

export default UserSelection;
