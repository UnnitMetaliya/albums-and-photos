import React from "react";
import { Dropdown, Button } from "semantic-ui-react";

const friendOptions = [
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
];

const UserSelection = () => (
  <div className="User-selection">
    <Dropdown placeholder="Select User" selection options={friendOptions} />
    <Button>OK!</Button>
  </div>
);

export default UserSelection;
