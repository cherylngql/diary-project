import React, {Component} from 'react'
import { connect } from 'react-redux'
import { submitEntry } from './store';

class SingleEntry extends Component {
  constructor() {
    super();
    this.state = {
      leftpage: '',
      rightpage: '',
      title: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitEntry({
      content: this.state.leftpage + ' ' + this.state.rightpage,
      title: this.state.title || (new Date()).getDate()
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div id="journal">
            <textarea name="leftpage" rows="25" cols="40" placeholder="Today was a great day..." value={this.state.leftpage} onChange={this.handleChange}/>
            <textarea name="rightpage" rows="25" cols="40" value={this.state.rightpage} onChange={this.handleChange}/>
        </div>
        <div id="menu">
          <button id='previous'>Previous Page</button>
          <button id='next'>Next Page</button>
          <button id='addPage'>Add Page</button>
          <button id='submit' onClick={this.handleSubmit}>Submit</button>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitEntry: (entry) => dispatch(submitEntry(entry))
})

export default connect(null, mapDispatchToProps)(SingleEntry);