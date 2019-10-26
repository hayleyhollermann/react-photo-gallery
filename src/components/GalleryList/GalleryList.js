import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    render() {
      return (
          <>
          <div id="galleryDiv">
            {this.props.gallery.map(picture => (
              <div class="singleImageItem" key={picture.id}>
                <GalleryItem 
                  path={picture.path} 
                  id={picture.id}
                  description={picture.description}
                />
                <button class="loveImageButton" onClick={ ()=> this.props.loveImage(picture.id, picture.likes)}>Love it!</button>
                <p>Loved by {picture.likes} people!!</p>
              </div>
            ))}
          </div>
          </>
      );
    }
  }
  
  export default GalleryList;