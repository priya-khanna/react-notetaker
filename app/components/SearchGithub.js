import React from 'react';
import { createHistory, useBasename } from 'history'
import {Router, History} from 'react-router';

const history = useBasename(createHistory)({
  basename: '/'
})

class SearchGithub extends React.Component {
  getRef(ref){
    this.usernameRef = ref;
  }
  handleSubmit(){
    const username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.props.history.pushState(null, "/profile/" + username)
  }
  render(){
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
}

SearchGithub.PropTypes = {
  history: React.PropTypes.object.isRequired
}

export default SearchGithub;

// can't use mixins with es6, react has this context which allows to pass functions to its child components
//context object has router property on it, we were getting it from mixins, we can add contextTypes to the class and access the specfic context properties
// commas are removes since we are in class not object

// previous handleSubmit()
// var username = this.refs.username.getDOMNode().value;
// router.transitionTo('profile', { username: username });
// SearchGithub.contextTypes = {
//   router: React.PropTypes.func.isRequired
// };

// <input type="text" className="form-control" ref="username" />

