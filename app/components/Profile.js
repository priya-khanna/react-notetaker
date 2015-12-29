// componentDiDMount lifecycle event is called right after after component mounts the view
// mixins add few properties to this
// create new instance of Firebase and pass it the url where project is located
// bindAsArray takes 2 args, ref to the firebase, and the property u want to bind the firebase data to
//inside a function new context is create and this changes
// to get url params, we were using this.getParams().username,
// this.router = this.context.router, this.router.getCurrentParams().username
// this.childRef.child('new_notes').push().set(this.state.notes.concat(['welcome3']));
// this.childRef.child('new_notes').push().set(['hello']);

//bindToState allows to bind a property on your state to the endpoint in firebase
// if u dont use supoer(props) and pass props as arg to constuctor , u will get error can't use this keyword inside of a constructor
// to write to firebase, rebase has base.post(endpoint, {data: x....} ), i.e object which has data property that will have whcih will update the endpoint
// with arrow syntax => for functions, no need to user .bind(this) since it doesnt create a new context inside of that function
// we can also replace classes with functions that takes in props and will render
// const Profile => ({props......}) {
//   return()
// }
// mixins: [Router.State, ReactFireMixin]
// getInitialState: function(){ return notes: [],}

// Fetching data from firebase
// this.childRef.child('new_notes').on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

import React from 'react'
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import getGithubInfo from '../utils/helpers';
import Rebase from 're-base';

const base = Rebase.createClass('https://blinding-inferno-1823.firebaseio.com/')


class Profile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }

  init(username){
  // this.childRef = this.ref.child(username);
  // this.bindAsArray(this.childRef.child('new_notes'), 'notes');
  // this.ref = new Firebase('https://blinding-inferno-1823.firebaseio.com/');
  this.ref = base.bindToState(username, {
    context: this,
    asArrray: true,
    state: 'notes'
  });

  getGithubInfo(username)
    .then(function(data){
      this.setState({
        bio: data.bio,
        repos: data.repos
      })
    }.bind(this))
  }

  componentDidMount(){
    this.init(this.props.params.username)
  }
  componentWillReceiveProps(nextProps){
    // this will be called on route change
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }
  componentWillUnmount(){
    // this.unbind('notes');
    base.removeBinding(this.ref);
  }

  handleAddNote(newNote){
    // this.childRef.child('new_notes').push().set([newNote]);
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    })
  }

  render(){
    var username = this.props.params.username;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={username}
            notes={this.state.notes}
            addNote={this.handleAddNote.bind(this)} />
        </div>
      </div>
    )
  }
}
export default Profile;