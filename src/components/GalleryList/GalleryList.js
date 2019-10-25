import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
      return (
          <>
        <p>Enjoy my lovely gallery!</p>
          <div id="galleryDiv">
            {this.props.gallery.map(picture => (
              <div className="images" key={picture.id}>
                <GalleryItem path={picture.path} id={picture.id}/>
                <button onClick={ ()=> this.props.loveImage(picture.id, picture.likes)}>Love it!</button>
                <p>Loved by {picture.likes} people!!</p>
              </div>
            ))}
          </div>
          </>
      );
    }
  }
  
  export default GalleryList;