import React from "react";

import CONTACT_DATA from "./contact.data.js";

//import CollectionPreview from "../../components/collection-preview/collection-preview";
import CollectionPreview from "../../components/collection-preview/collection-preview.components";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: CONTACT_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="contact-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ContactPage;