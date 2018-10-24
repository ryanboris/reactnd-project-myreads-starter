import React from "react";
import { api } from "./BooksAPI";
import "./App.css";
import SearchBooksBar from "./components/SearchBooks/SearchBooksBar";
import Bookshelf from "./components/Bookshelf";
import axios from "axios";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showSearchPage: false
    };
  }

  componentDidMount() {
    axios
        .get(`${api}/books`)
      .then(res => {
        this.setState({ books: res.js.books });
      })
      .catch(err => console.log("Error in GET"));
  }
  render() {
    return (
      <div className="App">
        <h1>My Reads</h1>
        <SearchBooksBar />
        <Bookshelf />
      </div>
    );
  }
}

export default BooksApp;
