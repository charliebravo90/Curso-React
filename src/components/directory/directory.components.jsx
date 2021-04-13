import React from "react";

import MenuItem from "../menu-item/menu-item.components";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        
        {
          title: "doglover",
          imageUrl: "https://i.ibb.co/bgwPTg8/perros.jpg",
          size: "large",
          id: 1,
          linkUrl: "",
        },
        {
          title: "catlover",
          imageUrl: "https://dcom-prod.imgix.net/files/2020-08/PORTADA_Articulo%20%281%29.jpg?w=1280&h=720&crop=faces&fit=crop&auto=compress&q=75",
          size: "large",
          id: 2,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;