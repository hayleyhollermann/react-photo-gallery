import React, { Component } from 'react';

class GalleryItem extends Component {
    render() {
      return (
          <>
            <img key={this.props.id} src={this.props.path} alt={this.props.id}/>
          </>
      );
    }
  }
  
  export default GalleryItem;