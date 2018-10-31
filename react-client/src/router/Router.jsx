import styled from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import $ from 'jquery';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Landing from '../components/Landing.jsx';
import Profile from '../components/Profile.jsx';
import Tracks from '../components/Tracks.jsx';
import Artists from '../components/Artists.jsx';
import ArtistsAndTracks from '../components/ArtistsAndTracks.jsx';
import MoreArtistsAndTracks from '../components/MoreArtistsAndTracks.jsx';
import TestChart from '../components/TestChart.jsx';

const Wrapper = styled.div`
  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    // transition: opacity 3000ms ease-in;
  }
`;


class HipsterfyRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      profile: null,
      tracks: null,
      tracksAveragePopularity: null,
      artists: null,
      artistsAveragePopularity: null, 
      hasBeenSent: false,
      currentPage: "MoreArtistsAndTracks", // Should start at "Landing"
    }

    this.changeToNextPage = this.changeToNextPage.bind(this);
  }

  findAveragePopularityOfItems(items){
    let averagePopularity = 0
    items.forEach(item => {averagePopularity += item.popularity});
    averagePopularity = averagePopularity / items.length;
    return averagePopularity;
  }

  changeToNextPage(){
    const {currentPage} = this.state
    switch(currentPage) {
      case "Landing":
          this.setState({
            currentPage: "ArtistsAndTracks"
          })
          break;
      case "ArtistsAndTracks":
          this.setState({
            currentPage: "MoreArtistsAndTracks"
          })
          break;
    }
  }

  componentDidMount() {

    let access_token = window.location.hash.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];

    // user data
    $.ajax({
      url: 'https://api.spotify.com/v1/me',
      headers: {
        'Authorization':`Bearer ${access_token}`,
      }, 
      success: (data) => {
        this.setState({profile: data});
        // console.log('got profile', this.state);
      },
      error: (err) => {
        console.log('err', err);
      }
    });

    // top artists
    $.ajax({
      url: 'https://api.spotify.com/v1/me/top/artists',
      headers: {
        'Authorization':`Bearer ${access_token}`,
      }, 
      data: {
        'limit' : 50,
        'time_range': 'long_term'
      },
      success: (data) => {
        this.setState({
          artists: data,
          artistsAveragePopularity: this.findAveragePopularityOfItems(data.items)
        });
        // console.log('got artists', this.state);
      },
      error: (err) => {
        console.log('err', err);
      }
    });

    // top tracks
    $.ajax({
      url: 'https://api.spotify.com/v1/me/top/tracks',
      headers: {
        'Authorization':`Bearer ${access_token}`,
      }, 
      data: {
        'limit' : 50,
        'time_range': 'long_term'
      },
      success: (data) => {
        this.setState({
          tracks: data,
          tracksAveragePopularity: this.findAveragePopularityOfItems(data.items)
        });
        // console.log('got tracks', this.state);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  componentDidUpdate(){
    const {profile, tracks, artists, hasBeenSent} = this.state;
    if (profile && tracks && artists && !hasBeenSent){
      console.log('we have full data, and it has not been sent yet!', this.state);
      $.ajax({
        type: 'POST',
        url: '/api/user',
        data: {
          id: JSON.stringify(profile.id),
          profile: JSON.stringify(profile),
          tracks: JSON.stringify(tracks),
          artists: JSON.stringify(artists)
        },
        success: (data) => {
          this.setState({hasBeenSent: true});
          console.log('sent data to server', this.state);
        },
        error: (err) => {
          console.log('err', err);
        }
      });
    }
  }

  render () {
    console.log("window location", window.location.pathname);
    const { tracksAveragePopularity, artistsAveragePopularity, profile, tracks, artists, currentPage } = this.state;
    if (tracksAveragePopularity && artistsAveragePopularity && profile && tracks && artists && window.location.pathname === '/'){
        return (
          <Wrapper>
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={3000}
              transitionLeaveTimeout={3000}>
              {currentPage === "Landing" &&
                <Landing 
                  tracksAveragePopularity={tracksAveragePopularity} 
                  artistsAveragePopularity={artistsAveragePopularity} 
                  profile={profile} 
                  changeToNextPage={this.changeToNextPage}
                />  
              }
              {currentPage === "ArtistsAndTracks" &&
              <ArtistsAndTracks 
                tracks={tracks} 
                artists={artists} 
                profile={profile} 
                tracksAveragePopularity={tracksAveragePopularity} 
                artistsAveragePopularity={artistsAveragePopularity}
                changeToNextPage={this.changeToNextPage}
              />
              }
              {currentPage === "MoreArtistsAndTracks" &&
              <MoreArtistsAndTracks 
                tracks={tracks} 
                artists={artists} 
                profile={profile} 
                tracksAveragePopularity={tracksAveragePopularity} 
                artistsAveragePopularity={artistsAveragePopularity}
                changeToNextPage={this.changeToNextPage}
              />
              }
            </ReactCSSTransitionGroup>
          </Wrapper>
        )
    } else {
      return (<div>Loading...</div>)
    }
  }
}

export default HipsterfyRouter;
