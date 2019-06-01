import React, { Component } from "react";
import { Select, Card, List } from "antd";

class PhotoAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUserInfo: [],
      userAlbums: [],
      albumPhotos: []
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

  handleAlbumClick = index => {
    console.log(index);
    const photosUrl =
      "https://jsonplaceholder.typicode.com/photos?albumId=" + index;

    fetch(photosUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ photosUrl: responseJson });
        console.log(this.state.photosUrl);
      })
      .catch(error => {
        console.log(error);
      });
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
        </div>
        <div className="User-albums-list">
          <h2>{this.state.selectedUserInfo}</h2>
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
          >
            {this.state.userAlbums.map((album, index) => (
              <List.Item key={album.id}>
                <Card
                  className="Album-card"
                  title={`Album # - ` + album.id}
                  onClick={() => this.handleAlbumClick(index)}
                >
                  {album.title}
                </Card>
              </List.Item>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default PhotoAlbums;
