import React, { Component } from 'react';

class GalleryItem extends Component {
    state = {
        image: true,
    }

    toggleImage = () => {
        this.setState({image: !this.state.image})
    }

    render() {
      return (
          <>
          <div className="images" key={this.props.id} onClick={this.toggleImage}>
              {this.state.image ? 
              <img 
                src={this.props.path} 
                alt={this.props.id}
              /> : 
                <p>{this.props.description}</p>}
          </div>
          </>
      );
    }
  }
  
  export default GalleryItem;