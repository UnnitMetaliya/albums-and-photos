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
        console.log("Test - Retriving list of users on component did mount.");
        console.log(this.state.users);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = userID => {
    this.setState({ selectedUserInfo: userID });
    const albumUrl =
      "https://jsonplaceholder.typicode.com/albums?userId=" + userID;

    fetch(albumUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ userAlbums: responseJson });
        console.log("Test - Retrive Albums for selected users.");
        console.log("Album URL");
        console.log(albumUrl);
        console.log("Albums");
        console.log(this.state.userAlbums);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleAlbumClick = (albumId, index) => {
    console.log("Test - Displaying albumId # of album clicked.");
    console.log(albumId);
    // this.setState({ userAlbums: [] });
    const photosUrl =
      "https://jsonplaceholder.typicode.com/photos?albumId=" + albumId;

    console.log(photosUrl);

    fetch(photosUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ albumPhotos: responseJson });
        console.log(this.state.albumPhotos);
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
              xxl: 2
            }}
          >
            {this.state.userAlbums.map((album, index) => (
              <List.Item key={album.id} id={album.id}>
                <Card
                  className="Album-card"
                  title={`Album #` + album.id}
                  onClick={() => this.handleAlbumClick(album.id)}
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
