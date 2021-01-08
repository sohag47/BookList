import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


// import all pages
import CreateBook from './CreateBook';
import ShowBookList from './ShowBookList';
import ShowBookDetails from './ShowBookDetails';
import UpdateBookInfo from './UpdateBookInfo';

class BookR extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={ShowBookList}></Route>
                    <Route path='/create-book' component={CreateBook} ></Route>
                    <Route path='/edit-book/:id' component={UpdateBookInfo} ></Route>
                    <Route path='/show-book/:id' component={ShowBookDetails} ></Route>
                </Switch>
            </div>
        );
    }
}

export default BookR;