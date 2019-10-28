import React, { Component } from 'react';

class GalleryItem extends Component {
    state = {
        image: true,
    }

    // on click, changes state.image value
    toggleImage = () => {
        this.setState({image: !this.state.image})
    }

    render() {
      return (
          <>
          <div className="images" key={this.props.id} onClick={this.toggleImage}>
              {/* conditional rendering, picture or description */}
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