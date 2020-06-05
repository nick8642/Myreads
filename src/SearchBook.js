import React from 'react'
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import DebounceInput from 'react-debounce-input';

class Search extends React.Component {
    state = {
        results: []
    }

    //Keeps track of the input value
    search = (e) => {
        const val = e.target.value;
        if (!val) {
            this.setState({results: []});
            return;
        }

        //Call to the search API
        BooksAPI
            .search(val, 20)
            .then(results => {
                if (!results || results.error) {
                    this.setState({results: []});
                    return;
                }
                // map over the books returned from the search API, and check if they are on the
                // shelf or not
                results = results.map((book) => {
                    const bookOnShelf = this
                        .props
                        .shelfbooks
                        .find(b => b.id === book.id);
                    book.shelf = bookOnShelf
                        ? bookOnShelf.shelf
                        : "none";
                    return book;
                });

                this.setState({results});
            });
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            minLength={2}
                            debounceTimeout={325}
                            element="input"
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.search}/>
                            
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.results && this
                            .state
                            .results
                            .map((book, index) => (
                                <li key={book.id + index}>
                                    <Book shelfbooks={book} onChange={this.props.onChange}/>
                                </li>
                            ))}
                    </ol>
                </div>
            </div>

        )
    }
}

export default Search