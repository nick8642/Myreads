My-Reads APP 

This app allows you to search for books and put it into different shelf.
There are 2 pages -:
1- The home page which shows 3 different shelves -  'currently reading', 'want to read' and 'read'.
2- The search page which will allow user to search the book in the database.


Installation :

Move to the project folder -
$ npm install
$ npm start


Backend -:

The Backend server is provided in BooksAPI.js file.
The backend API is having limited amount of data so we can find only some books there. It will allow you to search only this terms -

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'


Project -:

MAIN PAGE -:

The main page has 3 shelves for books. User can move books from one shelf to other using the options given below every book.
when the browser is refreshed the same information will be displayed on the page.


SEARCH PAGE -:

The search page has a input field. User can put the name of the book he/she wants to search.
It will give multiple suggestion related to that string.
By default the book is assigned to none shelf.
User can change the shelf of the book he want. There is a button to move back to main page.
The books whose shelf is changed will be reflected on main page.



Code Functionality 

Component state is passed down from parent components to child components. I used setState() to modify the state.
Books have same state on both the pages. Any change in state will be reflected on both the pages.
Router is used perfectly to move between pages.