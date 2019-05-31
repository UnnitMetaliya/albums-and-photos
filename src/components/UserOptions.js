import React, { Component } from "react";
import { Select, Card, List } from "antd";

class UserOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUserInfo: [],
      userAlbums: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAlbumClick = this.handleAlbumClick.bind(this);
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

  handleChange = userID => {
    console.log(`selected ${userID}`);
    this.setState({ selectedUserInfo: userID });
    const albumUrl =
      "https://jsonplaceholder.typicode.com/albums?userId=" + userID;

    fetch(albumUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ userAlbums: responseJson });
        console.log(this.state.userAlbums);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(albumUrl);
  };

  handleAlbumClick = albumID => {
    alert("You clicked on album no:" + albumID);
  };

  render() {
    let { Option } = Select;
    return (
      <div className="container">
        <div className="User-selection">
          <Select
            defaultValue="Select User"
            style={{ width: 220 }}
            onChange={this.handleChange}
          >
            {this.state.users.map(user => (
              <Option key={user.id}>{user.name}</Option>
            ))}
          </Select>
          {/* <div className="User-albums">
            <Card>
              {this.state.userAlbums.map(album => (
                <Card.Grid key={album.id} onClick={this.handleAlbumClick}>
                  {album.title}
                </Card.Grid>
              ))}
            </Card>
          </div> */}
        </div>
        <div className="User-albums-list">
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 2,
              xxl: 3
            }}
            dataSource={this.state.userAlbums}
            renderItem={item => (
              <List.Item>
                <Card title={`Album # - ` + item.id}>{item.title}</Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default UserOptions;
