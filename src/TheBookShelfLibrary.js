import React, { Component } from 'react'
import TheBookItem from './TheBookItem'

export class TheBookShelfLibrary extends Component {

    // array of shelf types values and description
    BookShelfLibraryTypes = [
        // { value: 'none', description: 'Add Your Book Here...' },
        { value: 'currentlyReading', description: 'Currently Reading' },
        { value: 'wantToRead', description: 'Want to Read' },
        { value: 'read', description: 'Read' },
    ];

    renderBookShelfItems() {
        // loop inside the shelf types (BookShelfLibraryTypes)
        // and render books for that shelf type 
        return this.BookShelfLibraryTypes.map((shelfType) => (
            <div className="bookshelf" key={shelfType.value}>
                <h2 className="bookshelf-title">{shelfType.description}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/* get the same type as shelfType */}
                        {
                            this.props.AllBooks
                                .filter((bookShelfType) => (bookShelfType.shelf === shelfType.value))
                                .map(TheBook => (
                                    <li key={TheBook.id}>
                                        <TheBookItem
                                            ShelfTypeValue={shelfType.value}
                                            TheBook={TheBook}
                                            onShelfContextMenuChange={this.props.onShelfContextMenuChange}
                                        />
                                    </li>
                                ))
                        }

                    </ol>
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div>
                {this.renderBookShelfItems()}
            </div>
        )
    }
}

export default TheBookShelfLibrary
