import React, { Component } from 'react';
import Book from './Book';
import { PropTypes } from 'prop-types';

const BookShelf = props => {
  update_book = (book, shelf) => {
    props.onChangeShelf(book, shelf);
  };
  const books = this.props.books;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (
            <Book
              book={book}
              key={index}
              onUpdate={shelf => {
                this.update_book(book, shelf);
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
