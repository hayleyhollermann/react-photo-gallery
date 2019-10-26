import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state= {
    gallery: [],
    newImage:{ id: '', path: '', description: '', likes: 0 }
  }

  componentDidMount(){
    // component/DOM is ready (like onReady)
    console.log('app component is ready');
    this.getImages();
  }

  getImages = () => {
    console.log('getting images');
    axios.get('/gallery')
      .then(response => {
        this.setState({
          gallery: response.data
        })
        console.log(this.state.gallery);
      })
  }

  loveImage = (id, likes) => {
    console.log(id, likes);
    let pictureLikes = likes + 1;
    console.log(pictureLikes);
    
    axios.put(`/gallery/likes/${id}`, {likes: pictureLikes})
    .then(response => {
      this.getImages();
    })
    .catch( error=> {
      console.log(`Couldn't update likes!`, error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList 
          gallery={this.state.gallery}
          loveImage={this.loveImage}
        />
      </div>
    );
  }
}

export default App;
