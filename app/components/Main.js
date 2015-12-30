// creates React component, there are few properties you can pass in.
// render specifies what ui looks like for the specific element

// which component to render and where to render to. Its gonna select the 'test' div and replace it with the ui inside renderder property

import React from 'react';
import SearchGithub from './SearchGithub'

const Main = ({children, history}) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          <SearchGithub history={history}/>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Main
// {this.props.children}
// React.render(<Main />, document.getElementById('example'));





