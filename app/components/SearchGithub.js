import React from 'react';
import Router from 'react-router';

var SearchGithub = React.createClass({
  mixins: [Router.Navigation],
  handleSubmit: function(){
    var username = this.refs.username.getDOMNode().value;
    this.refs.username.getDOMNode().value = '';
    this.transitionTo('profile', { username: username });

  },
  componentDidMount: function(){
    console.log("test", this);

  },
  render: function(){
    return (
      <div className="col-sm-12">
        <div className="col-sm-7">
          <input type="text" className="form-control" ref="username"/>
        </div>
        <span className="input-group-btn" col-sm-5>
          <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Search Github</button>
        </span>
      </div>
    );
  }
});

module.exports = SearchGithub;

