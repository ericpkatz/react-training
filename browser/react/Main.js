'use strict';
import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

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
    this.state = {
      album: fakeAlbum
    };

  }
  render(){
      const songs = this.state.album.songs.map((song, index) => (
        <tr key={index}>
          <td>
            <button className="btn btn-default btn-xs">
              <span className="glyphicon glyphicon-play"></span>
            </button>
          </td>
          <td>{ song.name }</td>
          <td>{ song.artists.map(artist => artist.name).join(', ') }</td>
          <td>{ song.genre }</td>
        </tr>
      )
    );

    return (
        <div id="main" className="container-fluid">
          <Sidebar />
          <div className="album col-xs-10">
            <div>
              <h3>{ this.state.album.name }</h3>
              <img src={this.state.album.imageUrl} className="img-thumbnail" />
            </div>
            <table className='table'>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Artists</th>
                  <th>Genre</th>
                </tr>
              </thead>
              <tbody>
                { songs }
              </tbody>
            </table>
          </div>
          <Footer />
        </div>
    );
  }
}

module.exports = Main;
