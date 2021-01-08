import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import BookR from './components/BookR';
//import CreateBook from './components/CreateBook';
//import ShowBookList from './components/ShowBookList';
//import BookCard from './components/BookCard';
//import ShowBookDetails from './components/ShowBookDetails';
//import UpdateBookInfo from './components/UpdateBookInfo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <BookR></BookR>
      </BrowserRouter>

    </div>
  );
}
export default App;
