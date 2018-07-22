import React, {Component} from 'react'
import { fetchEntries } from './store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AllEntries extends Component {
  
  componentDidMount () {
    this.props.fetchEntries();
  }

  render () {
    return (
      <div>
        {this.props.allEntries.length
        ? <div className="">
            {this.props.allEntries.map(entry => (
            <Link key={entry.id} to={`entries/${entry.id}`}>
              <div className="">
                <h3 className="">{entry.title}</h3>
              </div>
            </Link>))}
          </div>
        : <div><h1>There are currently no entries.</h1></div>
        }
        <div className="add">
          <Link to="/"><button type="button">Start Writing</button></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allEntries: state.allEntries
})

const mapDispatchToProps = (dispatch) => ({
  fetchEntries: () => dispatch(fetchEntries())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllEntries)