'use strict';
import React from 'react';

class Album extends React.Component{
  constructor(){
    super();
  }

  render(){
    if(!this.props.id)
      return null;
    const songs = this.props.songs.map((song, index) => (
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
