import React, { Component } from 'react';

class GalleryList extends Component {
    render() {
      return (
          <>
        <p>Enjoy my lovely gallery!</p>
          <div id="galleryDiv">
            {this.props.gallery.map(picture => (
              <div className="images" key={picture.id}>
                <img src={picture.path} alt={picture.description}/>
                <button onClick={ ()=> this.props.toggleImage(picture.id)}>Love it!</button>
                <p>Loved by {picture.likes} people!!</p>
              </div>
            ))}
          </div>
          </>
      );
    }
  }
  
  export default GalleryList;