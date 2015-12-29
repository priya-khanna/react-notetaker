// componentDiDMount lifecycle event is called right after after component mounts the view
// mixins add few properties to this
// create new instance of Firebase and pass it the url where project is located
// bindAsArray takes 2 args, ref to the firebase, and the property u want to bind the firebase data to
//inside a function new context is create and this changes

var React = require('react');
import { Router } from 'react-router';
import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';
var ReactFireMixin = require('reactFire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers')

var Profile  = React.createClass({
  mixins: [Router.State, ReactFireMixin],
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  init: function() {
    this.childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(this.childRef.child('new_notes'), 'notes');
    // this.childRef.child('new_notes').push().set(this.state.notes.concat(['welcome3']));
    // this.childRef.child('new_notes').push().set(['hello']);

    helpers.getGithubInfo(this.props.params.username)
      .then(function(dataObj){
        this.setState({
          repos: dataObj.repos,
          bio: dataObj.bio
        });
       console.log("repos", this.state.repos);
       console.log("bio", this.state.bio);
      }.bind(this));


    this.childRef.child('new_notes').on("value", function(snapshot) {
      console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  },

  componentDidMount: function(){
    this.ref = new Firebase('https://blinding-inferno-1823.firebaseio.com/');
    this.init();
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  handleNewNote: function(newNote){
    // var new_notes = this.state.notes.concat([[newNote]]);
    this.childRef.child('new_notes').push().set([newNote]);
  },
  componentWillReceiveProps: function(){
    // when there is route change
    this.unbind('notes');
    this.init();
  },
  render: function() {
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
          <Notes username={username} notes={this.state.notes} addNote={this.handleNewNote} />
        </div>
      </div>
    );
  }
});
module.exports = Profile;