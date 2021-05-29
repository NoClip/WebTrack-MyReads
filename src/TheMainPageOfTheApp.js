import React, { Component } from 'react'
import TheBookShelfLibrary from './TheBookShelfLibrary'
import { Link } from 'react-router-dom'

export class TheMainPageOfTheApp extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <TheBookShelfLibrary
                            AllBooks={this.props.AllBooks}
                            RefreshBooksState={this.props.RefreshBooksState}
                            onShelfContextMenuChange={this.props.onShelfContextMenuChange} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default TheMainPageOfTheApp
