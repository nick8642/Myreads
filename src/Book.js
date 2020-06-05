import React from 'react'
import { Component } from 'react'
import './App.css'

class Book extends Component {
    
    ShelfChange = (e) => {
        const shelf = e.target.value;
        this.props.onChange(this.props.shelfbooks, shelf);
    }
    
    render() {
        
        let image = this.props.shelfbooks.imageLinks ? this.props.shelfbooks.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
        
        return ( 
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${ image}")`,
                   
                }}/>
                <div className="book-shelf-changer">
                    <select onChange={this.ShelfChange} value={this.props.shelfbooks.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                 </div>
             </div>
            <div className="book-title">{this.props.shelfbooks.title}</div>
            <div className="book-authors">{this.props.shelfbooks.authors ? this.props.shelfbooks.authors.join(", ")  :"  Author Unknown " }</div>
            
        </div>  
        )
    }
}

export default Book