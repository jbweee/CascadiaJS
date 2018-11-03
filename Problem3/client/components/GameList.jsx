import React from 'react';
import Game from './Game.jsx';

const GameList = (props) => {
  return (
    <div style={styles.container}>
      <strong>Games:</strong>
      <div style={styles.list}>
        {props.games.map((game) => (
          <Game 
            game={game} 
            key={game._id} 
            clickHandler={props.clickHandler}
          />
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '40%',
    margin: '30px auto',
  },

  list: {
    height: '450px',
    overflow: 'scroll'
  }
}

export default GameList;