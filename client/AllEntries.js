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
      this.props.currentUser.id ?
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
          <Link to="/entries/add"><button type="button">Start Writing</button></Link>
        </div>
      </div> :
      <div>
        The security of the door to your unbounded world of ideas is taken very seriously. Please <Link to='/'>login</Link>!
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allEntries: state.allEntries,
  currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  fetchEntries: () => dispatch(fetchEntries())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllEntries)