import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
// import TheBookShelfLibrary from './TheBookShelfLibrary'
import TheBookItem from './TheBookItem'
import { Link } from 'react-router-dom'

export class TheSearchPageOfTheApp extends Component {

    state = {
        SearchTextState: '',
        SearchResultState: []
    };

    refreshTheSearchResult = (searchText) => {
        this.setState({ SearchTextState: searchText });

        if (searchText.trim().length !== 0) {
            BooksAPI.search(searchText).then((apiSearchResult) => {
                // console.log(apiSearchResult);
                if (apiSearchResult.error) {
                    console.log(apiSearchResult.error);
                    this.setState({ SearchResultState: [] });
                } else {
                    //this.setState({ SearchResultState: apiSearchResult });
                    // console.log(apiSearchResult);
                    this.setShelfTypesForSearchResult(apiSearchResult);

                }
            });
        } else {
            this.setState({ SearchResultState: [] });
        }
    };

    setShelfTypesForSearchResult = (apiSearchResult) => {
        let searchResultBooks = apiSearchResult;

        for (const resultBook of searchResultBooks) {
            for (let bookFromProps of this.props.AllBooks) {
                if (resultBook.id === bookFromProps.id) {
                    resultBook.shelf = bookFromProps.shelf;
                    // return resultBook;
                    //console.log('equls');
                }
            }
        }

        searchResultBooks
            .filter(book => book.shelf === undefined)
            .map(book => book.shelf = 'none');

        this.setState({ SearchResultState: searchResultBooks });
        return searchResultBooks;

        // let searchResultBooks = apiSearchResult.map((resultBook => {
        //     for (let bookFromProps of this.props.AllBooks) {
        //         if (resultBook.id === bookFromProps.id) {
        //             resultBook.shelf = bookFromProps.shelf;
        //             return resultBook;
        //             console.log('equls');
        //         }
        //         // else {
        //         //     console.log('none');
        //         //     resultBook.shelf = 'none';
        //         // }
        //     }
        //     // console.log({title: resultBook.title, shelf: resultBook.shelf });

        //}) ));


    };

    onSearchShelfContextMenuChange = (updatedBook, updatedShelf) => {
        this.props.onShelfContextMenuChange(updatedBook, updatedShelf);

        this.setState({
            SearchResultState: this.state.SearchResultState.map(aBook => {
                if (aBook.id === updatedBook.id) {
                    aBook.shelf = updatedShelf;
                }
                return aBook;
            })
        });
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/' >Close</Link>
                    {/* <button className="close-search" onClick={this.context.router.history.goBack}>Close</button> */}
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.SearchTextState}
                            onChange={(event) => this.refreshTheSearchResult(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.SearchResultState
                                .map(TheBook => (
                                    <li key={TheBook.id}>
                                        <TheBookItem
                                            ShelfTypeValue={TheBook.shelf}
                                            TheBook={TheBook}
                                            onShelfContextMenuChange={this.onSearchShelfContextMenuChange}
                                        />
                                    </li>
                                ))
                        }
                    </ol>
                </div>
            </div>
        )
    };
}

export default TheSearchPageOfTheApp
