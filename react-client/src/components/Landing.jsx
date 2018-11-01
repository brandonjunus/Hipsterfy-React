import styled from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const LandingPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: beige;
    animation: fadein 2s; 
    @keyframes fadein {
        0%     { opacity: 0; }
        100%   { opacity: 1; }
    }
`

const YourScore = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 75px;
    display: block;
    animation: fadein 4s; 
    @keyframes fadein {
        0%     { opacity: 0; }
        50%    { opacity: 0; }
        100%   { opacity: 1; }
    }
`;

const YourHipsterSlogan = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 30px;
    display: block;
    animation: fadein 6s; 
    @keyframes fadein {
        0%     { opacity: 0; }
        66%    { opacity: 0; }
        100%   { opacity: 1; }
    }
`;

const Border = styled.div`
    position: relative; 
    text-align: right;
    display: block;
    width: 80%;
    top: -150px;
`

const StyledLink = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    margin-top: 10px;
    font-family: 'Playfair Display', serif;    
    font-size: 20px;
    animation: fadein 8s; 
    @keyframes fadein {
        0%     { opacity: 0; }
        80%    { opacity: 0; }
        100%   { opacity: 1; }
    }
`

    
class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {artistsAveragePopularity, tracksAveragePopularity, changeToNextPage} = this.props
        const {display_name} = this.props.profile;
        
        // takes average popularity of all user's top 50 artists and tracks
        let hipsterRating = (100 - (artistsAveragePopularity + tracksAveragePopularity) / 2).toFixed(2);
        let hipsterSlogan = "Just have your friends call you Mississippi River from now on, you're that mainstream"
        return(
            <LandingPageContainer>
                <Border>
                    <YourScore>
                        {display_name ? `${display_name}, y`: 'Y'}our hipster rating is: {hipsterRating}
                    </YourScore>
                    <YourHipsterSlogan>
                        {hipsterSlogan}
                    </YourHipsterSlogan>
                    <StyledLink>
                        <a href="#" onClick={() => changeToNextPage("ArtistsAndTracks")}>Lets see what makes you so basic...</a>
                    </StyledLink>
                </Border>
            </LandingPageContainer>
        )
    }    
        
    
}

export default Landing;
