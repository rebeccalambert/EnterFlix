import React from 'react';
import { Link } from 'react-router-dom';

class WatchScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.upVolume = this.upVolume.bind(this);
        this.downVolume = this.downVolume.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }


    upVolume () {
        let vid = document.getElementById("display-video")
        vid.volume = 1;
        this.setState({volume: 'on'});
    }

    downVolume () {
        let vid = document.getElementById("display-video")
        vid.volume = 0;
        this.setState({volume: 'off'});
    }


    handleClose (e) {
        e.preventDefault();
        this.props.removeDropdown();
        this.props.history.push("/");
    }

    render () {
        let video_source = this.props.video ? this.props.video.videoURL : this.props.favorite.videoURL;

        return (
            <div className="watch-screen">
                <a className="watch-arrow" href="/" onClick={this.handleClose}> ⟵ </a>
                
                <video id="watch-video" autoPlay controls>
                    <source type="video/mp4" src={video_source} />
                </video>
           </div>

        );
    }
}

export default WatchScreen;