import React, { Component } from "react";
import { Select } from "antd";

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
    let albumOptions;
    if (this.state.userAlbums.length > 0) {
      albumOptions = (
        <div className="User-albums-dropdown">
          <h2>Ok! Now Select Album You Want To See!</h2>
          <Select
            defaultValue="Select Album"
            style={{ width: 520 }}
            onChange={this.handleAlbumClick}
          >
            {this.state.userAlbums.map(album => (
              <Option key={album.id}>
                {"Album # - " + album.id + " " + album.title}
              </Option>
            ))}
          </Select>
        </div>
      );
    }
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
        {albumOptions}
        <div className="responsiveGrid">
          {this.state.albumPhotos.map(photo => (
            <a href={photo.url}>
              <figure>
                <img src={photo.url} alt="" />
              </figure>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default PhotoAlbums;
