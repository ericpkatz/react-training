'use strict';
import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Album from './Album';

const fakeAlbum = {
  name: 'Abbey Road',
  imageUrl: 'http://fillmurray.com/300/300',
  songs: [{
    name: 'Romeo & Juliette',
    artists: [{name: 'Bill'}],
    genre: 'Funk',
    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  }, {
    name: 'White Rabbit',
    artists: [{name: 'Bill'}, {name: 'Bob'}],
    genre: 'Fantasy',
    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  }, {
    name: 'Lucy in the Sky with Diamonds',
    artists: [{name: 'Bob'}],
    genre: 'Space',
    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  }]
};

class Main extends React.Component{
  constructor(){
    super();

    this.state = { album: { songs: [] } };
    this.start = this.start.bind(this);

  }

  componentDidMount(){
    fetch('/api/albums/4')
      .then( result=> result.json())
      .then( album=> this.setState( { album:  album  } ));
  }

  start(song) {
    const audio = document.createElement('audio');
    audio.src = song.url;
    audio.load();
    audio.play();
    this.setState({ currentSong: song });
  }

  render(){
    return (
      <div id="main" className="container-fluid">
        <Sidebar />
        <Album {...this.state.album} start={this.start} currentSong={this.state.currentSong} />
        <Footer />
      </div>
    );
  }
}

module.exports = Main;
