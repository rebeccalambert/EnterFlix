import React from 'react';
import { Link } from 'react-router-dom';

class WatchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.video = this.props.video
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
     
        // debugger
        return (
            <div className="watch-screen">
                <a href="/" onClick={this.handleClose}>ARROW</a>
                {/* <Link to="/"><button onClick={this.handleClose} > Arrow </button></Link> */}
                
                <video id="watch-video" autoPlay controls>
                    <source type="video/mp4" src={this.props.video.videoURL} />
                </video>
                <div>{this.video.title}</div>
           </div>

        );
    }
}

export default WatchScreen;