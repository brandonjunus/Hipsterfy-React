import styled from 'styled-components';
import React from 'react';

const Title = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 50px;
    margin: 0 auto 20px;
    text-align: center;
`

const Genres = (props) => {
    // const {artists, profile, tracks, artistsAveragePopularity, tracksAveragePopularity, changeToNextPage} = props;
    // const artistItems = artists.items;
    // const trackItems = tracks.items;
    console.log("genre props", props)
    return (
        <div>
            hello
        </div>
    );
}

export default Genres;