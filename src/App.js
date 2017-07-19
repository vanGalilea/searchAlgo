import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import './App.css'
import Paper from 'material-ui/Paper'
import Search from './Search'

const style = {
  height: 320,
  width: 800,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
        <Paper style={style} zDepth={3} >
          <h2>Search Algorithm Assignment</h2>
          <p>Write an efficient algorithm, in any programming language of your choice,
           that can search for words in a dictionary by searching on a provided prefix.
           So write a function search(prefix) that returns a list of matched words based on the prefix provided by the user.
           The order of the returned words is not important.
           The dictionary could be loaded from an array or from the file system, whichever way you prefer.
           You don't necessarily have to use a full, actual dictionary. An array of words as a dictionary input would be sufficient,
           as long as it would theoretically be scalable to hundreds of thousands of words.
           Please don't use any external software like databases or caches. Make it code-only.</p>

           <p>Example If the dictionary contains the word 'table',
           it should be able to find this word when searching for 't' or 'ta' or 'tab' or 'tabl' or 'table'.
           But when searching for 'able', it wouldn't give you any results, because it's not a prefix of 'table'.
           If the dictionary also contains the word 'tablet', it would find 'tablet' too when searching for one of the prefixes listed above.
           It would then return an array with ['table', 'tablet'] or ['tablet', 'table'].
           You may assume that the dictionary contains only English words in lower case, without special characters. So only [a-z].</p>
        </Paper>
        <Search />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
