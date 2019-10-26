import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  toggleImage(id, description){
    console.log('flippin image!!', id, description);
    
  }
    render() {
      return (
          <>
        <p>Enjoy my lovely gallery!</p>
          <div id="galleryDiv">
            {this.props.gallery.map(picture => (
              <div key={picture.id}>
                <GalleryItem 
                  path={picture.path} 
                  id={picture.id}
                  description={picture.description}
                />
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