import React from 'react';
import Right from '../styles/rightpanel.jsx';

const RightPanel = ({state}) => {
  let number = state.displayViews;
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Right>
      <div style={styles.container}>
        <h2 style={styles.name}>{state.displayName}</h2>
        <img 
          src={state.displayImage}
          style={styles.image}
        />
        <h3 style={styles.viewers}>
          {numberWithCommas(number)} viewers
        </h3>
      </div>
    </Right>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },

  name: {
    display: 'block',
  },

  image: {
    display: 'block',
    width: '60%',
    margin: 'auto'
  },

  viewers: {
    marginTop: '10px',
    display: 'block'
  }
}

export default RightPanel;