'use strict';
import React from 'react';

class Album extends React.Component{
  constructor(){
    super();
  }

  render(){
    if(!this.props.id)
      return null;

    console.log(this.props.currentSong);
    const songs = this.props.songs.map(
      (song, index) => {
        const button = this.props.currentSong && (song.id === this.props.currentSong.id)
          ? null
          : (
            <button className="btn btn-default btn-xs">
              <span onClick={() => this.props.start(song)} className="glyphicon glyphicon-play"></span>
            </button>
          );

        return (
          <tr key={index}>
            <td>{ button }</td>
            <td>{ song.name }</td>
            <td>{ song.artists.map(artist => artist.name).join(', ') }</td>
            <td>{ song.genre }</td>
          </tr>
        );
      }
    );

    return (
        <div className="album col-xs-10">
          <div>
            <h3>{ this.props.name }</h3>
            <img src={`/api/albums/${this.props.id}/image`} className="img-thumbnail" />
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
    );
  }
}

module.exports = Album;
