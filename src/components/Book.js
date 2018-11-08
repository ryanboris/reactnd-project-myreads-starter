import React, { Component } from 'react';
import { PropTypes } from 'prop-types';


export default class Book extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeBookShelf = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")`
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={e => this.props.onUpdate(e.target.value)}>
                <option name="moveTo" value="moveTo" disabled>
                  Move to...
                </option>
                <option name="currentlyReading" value="currentlyReading">
                  Currently Reading
                </option>
                <option name="wantToRead" value="wantToRead">
                  Want to Read
                </option>
                <option name="read" value="read">
                  Read
                </option>
                <option name="none" value="none">
                  None
                </option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired
};
