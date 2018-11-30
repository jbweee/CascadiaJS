import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import LeftPanel from './LeftPanel.jsx';
import RightPanel from './RightPanel.jsx';
import Header from '../styles/header.jsx';
import {config} from './config.js'
import axios from 'axios';

axios.defaults.headers.get['Client-ID'] = config['Client-ID'];
axios.defaults.headers.get['Accept'] = 'application/vnd.twitchtv.v5+json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      displayName: 'Title',
      displayImage: '',
      displayViews: '-,---,---'
    };
    this.fetchGames = this.fetchGames.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  // Currently initially fetching with the word "World"
  componentDidMount() {
    this.fetchGames('World'); 
  }

  // Currently just searches if the game starts with the queried string
  //TODO:
    //incorporate wildcard search
  fetchGames(query) {
    axios
      .get(`https://api.twitch.tv/kraken/search/games?query=${query}`)
      .then((results) => {
        this.setState({
          games: results.data.games,
          displayName: results.data.games[0].name,
          displayImage: results.data.games[0].box.large,
          displayViews: results.data.games[0].popularity
        })
      })
      .catch((err) => {
        console.log(err, 'Unable to fetch data from Twitch API');
      })
  }

  //Upon clicking, set the state for the displayed game
  clickHandler(displayGame) {
    this.setState({
      displayName: displayGame.name,
      displayImage: displayGame.box.large,
      displayViews: displayGame.popularity
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <Header>
          <span style={{
            display: 'block',
            padding: '25px',
          }}>
            <svg height="35px" width="35px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 134">
              <title>Glitch_White_RGB</title>
              <path 
                style={{
                  fill: '#D3D3D3',
                  fill_rule: 'evenodd'
                }} 
                d="M89,77l-9,23v94h32v17h18l17-17h26l35-35V77H89Zm107,76-20,20H144l-17,17V173H100V89h96v64Zm-20-41v35H164V112h12Zm-32,0v35H132V112h12Z" 
                transform="translate(-80 -77)"
              />
            </svg>
          </span>
          <h1 style={{
            display: 'block'
          }}>Twitch Game Search</h1>
        </Header>
        <div style={{
          width: '100%',
          display: 'table',
          fontFamily: 'Helvetica, sans-serif',
          minHeight: '100%'
        }}>
          <LeftPanel 
            clickHandler={this.clickHandler}
            fetchGames={this.fetchGames}
            games={this.state.games}
          />
          <RightPanel
            state={this.state}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;