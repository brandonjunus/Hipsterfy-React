import styled from 'styled-components';
import React from 'react';

const imageWidth = '12vmax';

const Share = styled.div`
    font-size: 1em;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 300;
    margin: 4em auto;
    text-align: center;
    padding: 0.5em 1em;
    background-color: #4360b4;
    color: white;
    cursor:pointer;
    display:inline-block;
    border-radius: 3px;
`

const Title = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 2.8em;
    margin: auto 20px;
    padding-top: 100px;
    text-align: center;
`

const Border = styled.div`
    display: flex;
`
// margin: auto auto auto 20px;

const ArtistsBorder = styled.div`
    display:flex;
`
// align-items: stretch;

const ArtistImage = styled.div`
    background-image: url('${props => props.imSrc}');
    background-size: auto 100%;
    background-position: center;
    width: ${imageWidth};
    height: ${imageWidth};
    float: right;
    border-radius: 6px;
    border: 1px solid #e4e4e4;
`

const AlbumImage = styled.div`
    background-image: url('${props => props.imSrc}');
    background-size: auto 100%;
    background-position: center;
    height: ${imageWidth};
    width: ${imageWidth};
    float: left;
    border-radius: 6px;
    border: 1px solid #e4e4e4;
`

const ArtistsAndTracksContainer = styled.div`
    display: flex;
`

const Artists = styled.ul`
    flex: 42%;
    padding: 0 4%;
    border-right: 1px solid #bbb;
    margin: 0;
`

const Artist = styled.li`
    flex: 20%;
    margin-bottom: 20px;
    list-style: none;
    display: inline-block;
    width: 100%;
`

const Tracks = styled.ul`
    width: 42%;
    margin-top: 0;
    padding-inline-start: 0;
    padding: 0 4%;
`

const Track = styled.li`
    margin-bottom: 20px;
    list-style: none;
`

const TrackInfo = styled.div`
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    margin: auto auto auto 20px;
    max-width: 65%;
    cursor: default;
    font-size: 1em;
`

const ArtistInfo = styled.div`
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    text-align: right;
    margin: auto 20px auto auto;
    display: inline-block;
    float:right;
    cursor: default;
    font-size: 1em;
`
const ArtistName = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 1.5em;
    max-width: 100%;
    padding-bottom: 0.3em;
`
// font-size: 1.7em;

const SeeMoreDetails = styled.a`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
}`

const ArtistUnorderedList = styled.ul`
    list-style: none;
`

const TrackName = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 1.5em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    padding-bottom: 0.3em;
`
// font-size: 1.7em;

const TrackCardInfo = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 25px;
`

const TrackHipsterLevel = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 25px;
`

const BottomTitle = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 30px;
    margin: 0 auto;
    text-align: center;
`


const MoreArtistsAndTracks = (props) => {
    const {artists, profile, tracks, artistsAveragePopularity, tracksAveragePopularity, changeToNextPage} = props;

    const numItems = 20;

    const artistItems = artists.items.slice(0, numItems);
    const trackItems = tracks.items.slice(0, numItems);

    const artistsToRender = artistItems.map((artist, index) =>
            <Artist key={index}>
                <ArtistsBorder>
                  <ArtistInfo>
                    <ArtistName>{artist.name}</ArtistName>
                    <div>Hipster Level: {100 - artist.popularity}</div>
                    <SeeMoreDetails>See More Details</SeeMoreDetails>
                  </ArtistInfo>
                  <ArtistImage imSrc={artist.images[2].url}/>
                </ArtistsBorder>
            </Artist>
      );

      const tracksToRender = trackItems.map((track, index) => {
        // let trackName = track.name.substr(0, 65).trim().split(' ');
        // if (track.name.length > 65) {
        //   trackName.pop();
        //   trackName = trackName.join(' ') + '...';
        // } else {
        //   trackName = trackName.join(' ');
        // }

        return (
          <Track key={index}>
              <Border>
                  <AlbumImage imSrc={track.album.images[1].url}></AlbumImage>
                  <TrackInfo>
                      <TrackName title={track.name}>{track.name}</TrackName>
                      <div>Hipster Level: {100 - track.popularity}</div>
                      <div>{track.artists.map((artist, index) => <div key={index}>{artist.name}</div>)}</div>
                  </TrackInfo>
              </Border>
          </Track>
        )
      });

      return (
          <div>
              <Title>
                  Your Top Listened to Artists and Songs of All Time
              </Title>
              <center>
                <Share onClick={() => changeToNextPage("Share")}>
                  Share to Facebook
                </Share>
              </center>
              <ArtistsAndTracksContainer>
                  <Artists>
                          {artistsToRender}
                  </Artists>
                  <Tracks>
                          {tracksToRender}
                  </Tracks>
              </ArtistsAndTracksContainer>
          </div>
      );
  }

    // return (<div>Loading...</div>)
// }

export default MoreArtistsAndTracks;
