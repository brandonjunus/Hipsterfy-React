import styled, { keyframes } from 'styled-components';
import React from 'react';

// Your Top Listened to Artists and Songs of All Time...
const Title = styled.div`
  font-size: 2.8em;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
  margin: 0 auto 20px;
  text-align: center;
	padding: 1em 0;
`

const SeeMore = styled.div`
  font-size: 1em;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
  margin: 0 auto 20px;
  text-align: center;
  padding: 1em;
  background-color: #46f;
  color: white;
  cursor:pointer;
  display:inline-block;
  margin: 0 auto;
  border-radius: 6px;
`

const Border = styled.div`
  display: block;
`

const ArtistsBorder = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 20, 0.8);
`

const ArtistImagehoverIn = keyframes`
	from {filter: blur(${props => Math.round((props.hipsterRating * 10) / 100)}px);}
	to {filter: blur(0px);}
`;

const ArtistImagehoverOut = keyframes`
	from {filter: blur(0px);}
	to {filter: blur(${props => Math.round((props.hipsterRating * 10) / 100)}px);}
`;

const ArtistImage = styled.img`
	display: block;
	max-width: 250px;
	width: auto;
	height: 160px;
	margin: 0 15px;
	align-self: center;
  padding: 1em;
	filter: blur(${props => Math.round((props.hipsterRating * 10) / 100)}px)
					brightness(200%)
					grayscale(50%);
	animation: ${ArtistImagehoverOut} 0.1s;
	border-radius: 50%;
	&:hover {
    animation: ${ArtistImagehoverIn} 0.3s;
		animation-fill-mode: forwards;
	}
`

const AlbumImage = styled.img`
	display: block;
	max-width: 200px;
	width: 40%;
	height: auto;
	align-self: center;
	border-radius: 3px;
`

const ArtistsAndTracksContainer = styled.div`
  display: block;
`

const Artists = styled.ul`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	width: 80%;
	line-height:0px;
	padding: 0;
	margin: 0 auto;
	text-align: center;
`
// width: 47%;
// padding: 0 1.5%;

const Artist = styled.li`
  list-style: none;
	display: inline-block;
`

const Tracks = styled.ul`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  width: 50%;
  padding-right: 40px;
`

const Track = styled.li`
  margin-bottom: 20px;
  list-style: none;
`

const TrackInfo = styled.div`
  margin: auto auto auto 20px;
`

const ArtistInfo = styled.div`
	text-align: center;
	margin: auto 20px auto auto;
	position: absolute;
	line-height: 2.5em;
	cursor: default;
	border-radius: 5%;
	pointer-events: none;
`
const ArtistName = styled.div`
  font-size: 1.2em;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
`

const ArtistCardInfo = styled.div`
  font-size: 3em;
`

const ArtistUnorderedList = styled.ul`
  list-style: none;
`

const TrackName = styled.div`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 1.2em;
	white-space: nowrap;
	max-width: 80%;
	overflow: hidden;
	text-overflow: ellipsis;
`
const TrackCardInfo = styled.div`
  font-size: 1em;
`

const TrackHipsterLevel = styled.div`
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 1em;
`

const BottomTitle = styled.div`
  font-size: 30px;
  margin: 0 auto;
  text-align: center;
`

const ArtistsAndTracks = (props) => {
    const {artists, profile, tracks, artistsAveragePopularity, tracksAveragePopularity, changeToNextPage} = props;
    const artistItems = artists.items;
    const trackItems = tracks.items;
    if (artists, profile, tracks, artistsAveragePopularity, tracksAveragePopularity){
        let artistsToRender = [];
        let tracksToRender = [];
        for (let i = 0; i < 9; i++){
            artistsToRender.push(
                <Artist key={i}>
                    <ArtistsBorder>
												<ArtistImage src={artistItems[i].images[2].url} hipsterRating={100 - artistItems[i].popularity}/>
												<ArtistInfo>
													<ArtistCardInfo>{100 - artistItems[i].popularity}</ArtistCardInfo>
													<ArtistName>{artistItems[i].name}</ArtistName>
												</ArtistInfo>
                    </ArtistsBorder>
                </Artist>
            );
        }


        for (let i = 0; i < 0; i++){
            let trackArtists = trackItems[i].artists.map(artist => artist.name);
            tracksToRender.push(
                <Track key={i}>
                    <Border>
                        <AlbumImage src={trackItems[i].album.images[1].url}></AlbumImage>
                        <TrackInfo>
                            <TrackName>{trackItems[i].name}</TrackName>
                            <TrackCardInfo>{trackArtists.join(', ')}</TrackCardInfo>
                            <TrackHipsterLevel>Hipster Level: {100 - trackItems[i].popularity}</TrackHipsterLevel>
                        </TrackInfo>
                    </Border>
                </Track>
            );
        }
        return (
            <div>
              <center>
                <SeeMore onClick={() => changeToNextPage("MoreArtistsAndTracks")}>
                    See All Your Top Artists and Songs
                </SeeMore>
              </center>

                <Title>
                    Your Top Listened to Artists and Songs of All Time
                </Title>
                <ArtistsAndTracksContainer>
                    <Artists>
                            {artistsToRender}
                    </Artists>
                    <Tracks>
                            {tracksToRender}
                    </Tracks>
                </ArtistsAndTracksContainer>
                {/* <Title onClick={() => changeToNextPage("Genres")}>
                    See All Your Top Genres
                </Title> */}
            </div>
        );
    }

    return (<div>Loading...</div>)
}

export default ArtistsAndTracks;
