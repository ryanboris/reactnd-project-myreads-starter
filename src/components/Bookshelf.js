import React from 'react';
import Book from './Book';
import { PropTypes } from 'prop-types';

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book, index) => (
            <Book
              book={book}
              key={index}
              onUpdate={(book, shelf) => {
                props.onChangeShelf(book, shelf);
              }}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};
export default BookShelf;
//Check module imports
