//Individual Games in the GameList
import React from 'react';

const Game = (props) => {
  return (
    <div style={styles.container} onClick={() => {props.clickHandler(props.game)}}> 
      {props.game.name}
    </div>
  )
}

const styles = {
  container: {
    cursor: 'pointer',
    border: 'solid #666 1px',
    height: '40px',
    fontSize: '20px',
    padding: '10px',
    margin: '2px',
    boxShadow: 'inset 0.5px 0.5px 0.5px 0px rgba(0,0,0,0.75)',
    overflow: 'hidden'
  }
}

export default Game;