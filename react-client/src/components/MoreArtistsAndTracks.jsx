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
    // align-items: stretch;
`

const ArtistImage = styled.img`
    // height: 25%;
    // width: 25%;
    // margin-left: auto;
`
const AlbumImage = styled.img`
    height: 25%;
    width: 25%;
`

const ArtistsAndTracksContainer = styled.div`
    display: flex;
    // width: auto;
`
const Artists = styled.div`
    flex: 1 0 50%;
    // width: 50%;
    padding-right: 40px;
`
const Artist = styled.li`
    flex: 20%;
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
    font-size: 30px;
`

const ArtistCardInfo = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 10px;
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


const MoreArtistsAndTracks = (props) => {
    const {artists, profile, tracks, artistsAveragePopularity, tracksAveragePopularity, changeToNextPage} = props;
    const artistItems = artists.items;
    const trackItems = tracks.items;
        const artistsToRender = artistItems.map((artist, index) =>
            <Artist key={index}>
                <ArtistsBorder>
                    <ArtistInfo>
                    <ArtistImage src={artist.images[2].url} />
                        <ArtistName>{artist.name}</ArtistName>
                        <ArtistCardInfo>Hipster Level: {100 - artist.popularity}</ArtistCardInfo>
                        <SeeMoreDetails>See More Details...</SeeMoreDetails>
                    </ArtistInfo>
                </ArtistsBorder>
            </Artist>
        )
        const tracksToRender = trackItems.map((track, index) =>
            <Track key={index}>
                <Border>
                    <AlbumImage src={track.album.images[1].url}></AlbumImage>
                    <TrackInfo>
                        {track.name}
                        <div>Hipster Level: {100 - track.popularity}</div>
                        <div>{track.artists.map((artist, index) => <div key={index}>{artist.name}</div>)}</div>
                    </TrackInfo>
                </Border>
            </Track>
        );
        return (
            <div>
                <Title onClick={() => changeToNextPage("Share")}>
                    Share to Facebook?
                </Title>
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
            </div>
        );
    }

    // return (<div>Loading...</div>)
// }

export default MoreArtistsAndTracks;