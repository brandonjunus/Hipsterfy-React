import styled from 'styled-components';
import React from 'react';


const Title = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 50px;
    margin: 0 auto 20px;
    text-align: center;
`

const Border = styled.div`
    display: flex;
    border: solid;
    // margin: auto auto auto 20px;
`

const ArtistsBorder = styled.div`
    display: flex;
    // align-items: stretch;
`

const ArtistImage = styled.img`
    height: 15%;
    width: 15%;
    // margin-left: auto;
`
const AlbumImage = styled.img`
    height: 15%;
    width: 15%;
`

const ArtistsAndTracksContainer = styled.div`
    display: flex;
    // width: auto;
`
const Artists = styled.ul`
    width: 50%
    padding-right: 40px;
`
const Artist = styled.li`
    margin-bottom: 20px;
    list-style: none;
`

const Tracks = styled.ul`
    width: 50%;
    padding-right: 40px;
    border: solid;
`

const Track = styled.li`
    margin-bottom: 20px;
    list-style: none;
`

const TrackInfo = styled.div`
    border: solid;
    margin: auto auto auto 20px;
`

const ArtistInfo = styled.div`
    border: solid;
    text-align: right;
    margin: auto 20px auto auto;
`
const ArtistName = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 75px;
`

const ArtistCardInfo = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 30px;
`

const SeeMoreDetails = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 15px;
`

const ArtistUnorderedList = styled.ul`
    list-style: none;
`

const TrackName = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 60px;
`
const TrackCardInfo = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 25px;
`

const TrackHipsterLevel = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 25px;
`

const BottomTitle = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
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
        for (let i = 0; i < 3; i++){
            artistsToRender.push(
                <Artist key={i}>
                    <ArtistsBorder>
                        <ArtistInfo>
                            <ArtistName>{artistItems[i].name}</ArtistName>
                            <ArtistCardInfo>Hipster Level: {100 - artistItems[i].popularity}</ArtistCardInfo>
                        </ArtistInfo>
                        <ArtistImage src={artistItems[i].images[2].url} />
                    </ArtistsBorder>
                </Artist>
            )
        }
        for (let i = 0; i < 3; i++){
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
            )
        }
        return (
            <div>
                <Title>
                    Your Top Listned to Artists and Songs of All Time...
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
                <Title onClick={() => changeToNextPage("MoreArtistsAndTracks")}>
                    See All Your Top Artists and Songs
                </Title>
            </div>
        );
    }

    return (<div>Loading...</div>)
}

export default ArtistsAndTracks;