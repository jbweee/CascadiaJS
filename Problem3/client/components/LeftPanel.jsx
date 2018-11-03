import React from 'react';
import Search from './Search.jsx';
import GameList from './GameList.jsx';
import Left from '../styles/leftpanel.jsx';

const LeftPanel = (props) => (
  <Left>
    <div style={styles.container}>
      <p style={styles.description}>
        Search for your favorite games in the search box below. Click on their name to find out more information about them.
      </p>
      <div>
        <Search fetchGames={props.fetchGames}/>
      </div>
      <div>
        <GameList 
          games={props.games}
          clickHandler={props.clickHandler}
        />
      </div>
    </div>
  </Left>
)

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'left',
    fontSize: '20px',
    width: '100%'
  },

  description: {
    margin: '20px 60px',
    display: 'block',
  },
}

export default LeftPanel;