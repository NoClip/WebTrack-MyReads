import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import TheSearchPageOfTheApp from './TheSearchPageOfTheApp'
import TheMainPageOfTheApp from './TheMainPageOfTheApp'
import { Route } from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    AllBooksState: []
  }

  componentDidMount() {
    this.RefreshBooksState();
  }

  RefreshBooksState() {
    BooksAPI.getAll()
      .then(allBooksFromApi => {
        this.setState({ AllBooksState: allBooksFromApi })
        //console.log(this.state.AllBooksState);
      });
  }

  onShelfContextMenuChange = (updatedBook, updatedShelf) => {
    BooksAPI
      .update(updatedBook, updatedShelf)
      .then(res => {
        this.setState({
          AllBooksState: this.state.AllBooksState.map(aBook => {
            if (aBook.id === updatedBook.id) {
              aBook.shelf = updatedShelf;
            }
            return aBook;
          })
        });
      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <TheMainPageOfTheApp
            AllBooks={this.state.AllBooksState}
            RefreshBooksState={this.RefreshBooksState}
            onShelfContextMenuChange={this.onShelfContextMenuChange} />
        )} />

        <Route exact path="/search" render={() => (
          <TheSearchPageOfTheApp AllBooks={this.state.AllBooksState}
            RefreshBooksState={this.RefreshBooksState}
            onShelfContextMenuChange={this.onShelfContextMenuChange} />
        )} />
      </div>
    )
  }
}

export default BooksApp
