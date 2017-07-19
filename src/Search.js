import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import {orange500, blue500} from 'material-ui/styles/colors'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const styles = {
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
}

const wordList = [
  "aruba",
  "bonaire",
  "curacao",
  "saba",
  "sint maarten",
  "sint eustatius",
  "texel",
  "vlieland",
  "terschelling",
  "ameland",
  "schiermonnikoog",
  "rottumerplaat",
  "deadman"
]

export class Search extends PureComponent {

  state = {
    searchResult: [],
  }

  handleChange(event) {
    const prefix = event.target.value
    const searchResult = !!prefix ? wordList.filter((word)=> word.indexOf(prefix) === 0) : []
    this.setState({searchResult})
  }

  render() {
    const { searchResult } = this.state
    return (
      <Paper style={ dialogStyle }>
        <TextField
          floatingLabelText="Type anything to triger the search"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          type="text"
          onChange={this.handleChange.bind(this)}
        />
        {searchResult.map((word, index)=> <h4 key={index}>{word}</h4> )}
      </Paper>
    )
  }
}

export default Search
