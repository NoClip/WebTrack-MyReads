import React, { Component } from 'react'
import TheShelfChangerContextMenu from './TheShelfChangerContextMenu'

export class TheBookItem extends Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        // backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
                        style={{ width: 128, height: 193, backgroundImage: 'url(' + this.props.TheBook.imageLinks.smallThumbnail + ')' }}>
                    </div>
                    <TheShelfChangerContextMenu
                        ShelfTypeValue={this.props.ShelfTypeValue}
                        onShelfContextMenuChange={this.props.onShelfContextMenuChange}
                        TheBook={this.props.TheBook}
                    />
                </div>
                <div className="book-title">{this.props.TheBook.title}</div>
                <div className="book-authors">{this.props.TheBook.authors.join(', ')}</div>
            </div>
        )
    }
}

export default TheBookItem
