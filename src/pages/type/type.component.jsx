import React from "react";

import TYPE_DATA from "./type.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.components";

class TypePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: TYPE_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="type-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default TypePage;