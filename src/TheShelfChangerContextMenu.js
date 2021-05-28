import React, { Component } from 'react'

export class ShelfChangerContextMenu extends Component {
    onChange = (event) => {
        this.props.onShelfContextMenuChange(this.props.TheBook, event.target.value);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.props.ShelfTypeValue} onChange={this.onChange} >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChangerContextMenu
