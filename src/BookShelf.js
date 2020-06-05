import React from 'react'
import Book from './Book'

class BookShelf extends React.Component{
    render(){
        return(
            <div className='book-shelf'>
                <h2 className='book-shelf-title'>{this.props.bookshelfTitle}</h2>
                <div className='bookshelf-books'>
                    <ol>
                        {
                            this.props.bookshelfBooks
                            .map((book) => {
                                return <li key={book.id}>
                                <Book shelfbooks={book} onChange={this.props.onChange} />
                                </li>
                            })
                        }
                    </ol>
                </div>

            </div>
        )
    }
}
export default BookShelf