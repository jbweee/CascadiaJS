import React from 'react';
import {DebounceInput} from 'react-debounce-input';

const Search = (props) => (
  <form style={styles.container}>
    <strong>Search:</strong>
    <DebounceInput
      style={styles.input}
      debounceTimeout={300}
      onChange={event => {
        props.fetchGames(event.target.value)
      }}/>
  </form>
)

const styles = {
  container: {
    maxWidth: '50%',
    margin: 'auto'
  },

  input: {
    width: '100%',
    height: '40px',
    fontSize: '20px',
    padding: '10px',
    boxShadow: 'inset 0.5px 0.5px 0.5px 0px rgba(0,0,0,0.75)',
  }
}

export default Search;