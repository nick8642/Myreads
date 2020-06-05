import React from 'react'
import * as BooksAPI from './BooksAPI' 
import './App.css'
import {Route} from 'react-router-dom'
import BookList from './BookList.js'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
    shelfbooks : []
  }
  onChange = (book , shelf) => {
    book.shelf = shelf
    this.setState(state =>({
      shelfbooks: state.shelfbooks.filter(x => x.id !== book.id ).concat([book])
    }))
}

componentDidMount() {
  BooksAPI.getAll()
  .then(books => {
    this.setState({ shelfbooks: books });
  })
  .catch(err => {
    console.log(err);
    this.setState({ error: true });
  });
}
  render() {
    return (
      <div className="app">
         <Route exact path='/'
                render = {
                () =>(
                    <BookList shelfbooks={this.state.shelfbooks} onChange={this.onChange} />
                    )
            }/>
            <Route
          path="/search"
          render={({history}) => (<SearchBook
          onChange={this.onChange}
          history={history}
          shelfbooks={this.state.shelfbooks}/>)}/>

      </div>
    )
  }
}

export default BooksApp
