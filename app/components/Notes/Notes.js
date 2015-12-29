// this.refs means all the refs/name tags of your component
// var value = React.findDOMNode(this.refs.note).value;import React from 'react';
import React from 'react';
import NotesList from './Noteslist';

class Notes extends React.Component {
  handleSubmit(){
    var newNote = this.refs.note.getDOMNode().value;
    this.refs.note.getDOMNode().value = '';
    console.log("testting new note", newNote);
    this.props.addNote(newNote);
  }

  render(){
    return (
      <div>
        <h3> Notes for {this.props.username} </h3>
        <div className="input-group">
          <input type="text" className="form-control" ref="note" placeholder="Add new note" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
          </span>
        </div>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
}
export default Notes;
