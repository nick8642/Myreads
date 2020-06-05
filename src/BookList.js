import React from 'react'
import BookShelf from './BookShelf.js'
import {Link} from 'react-router-dom'

class BookList extends React.Component{

   
    render(){
        const currentlyReading = this.props.shelfbooks.filter((book) => book.shelf === 'currentlyReading')
        const wantToRead = this.props.shelfbooks.filter((book) => book.shelf === 'wantToRead')
        const read = this.props.shelfbooks.filter((book) => book.shelf === 'read')

        return(
            <div className="list-books">
            <div className="list-books-content">
                <div>
              <BookShelf 
                  bookshelfTitle='Currently Reading'
                  bookshelfBooks={currentlyReading}
                  onChange={this.props.onChange}
                 
              />
              </div> 
              <div>
              <BookShelf
                  bookshelfTitle='Want to Read'
                  bookshelfBooks={wantToRead}
                  onChange={this.props.onChange}
              />
              </div>
              <div>
              <BookShelf 
                  bookshelfTitle='Read' 
                  bookshelfBooks={read}
                  onChange={this.props.onChange}
              />
                </div>
          </div>
             <div className="open-search">
                <Link to="/search">Add book</Link>
            </div>
        </div>
        )
    }
}

export default BookList;