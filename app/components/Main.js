// creates React component, there are few properties you can pass in.
// render specifies what ui looks like for the specific element

// which component to render and where to render to. Its gonna select the 'test' div and replace it with the ui inside renderder property

var React = require('react');
var ReactDOM = require('react-dom')
var SearchGithub = require('./SearchGithub')

var Main  = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});
// React.render(<Main />, document.getElementById('example'));
module.exports = Main;





