import styled from 'styled-components';
import React from 'react';

const Title = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
    font-family: 'Playfair Display', serif;
    font-size: 50px;
    margin: 0 auto 20px;
    text-align: center;
`
class Share extends React.Component {
    constructor(props) {
        super(props);
    this.shareOnFacebook = this.shareOnFacebook.bind(this);
    }

    shareOnFacebook (hipsterRating, hipsterSlogan) {
        FB.ui({
            method: 'share',
            display: 'popup',
            quote: `My Hipster Rating is ${hipsterRating}! Check out Hipsterfy to see your own rating!`,
            hashtag: '#spotify',
            href: "https://www.google.com",
        }, function(response){})
    }
    render(){
        const {artists, profile, tracks, artistsAveragePopularity, tracksAveragePopularity, changeToNextPage} = this.props;
        let hipsterRating = (100 - (artistsAveragePopularity + tracksAveragePopularity) / 2).toFixed(2);
        let hipsterSlogan = "Just have your friends call you Mississippi River from now on, you're that mainstream"
        return (
            <div>
                <div id="shareBtn" className="btn btn-success clearfix" onClick={() => this.shareOnFacebook(hipsterRating, hipsterSlogan)}>Share</div>  
            </div>
        );
    }
}

export default Share;