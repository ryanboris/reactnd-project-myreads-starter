import React from "react";

const SearchBooksBar = props => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => this.setState({ showSearchPage: false })}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" />
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    </div>
  );
};

export default SearchBooksBar;
