import React, { useState, useEffect } from "react";

import Books from "./Books";
import Likes from "./Likes";

import NavBar from "./NavBar";


import SearchBar from "./SearchBar";

import BookForm from "./BookForm";



function LoggedInApp({ setCurrentUser, currentUser }) {
  const handleLogout = () => {
    setCurrentUser(null);
    fetch("/logout", { method: "DELETE" });
  };

  const [books, setBooks] = useState([]);
  console.log("books: ", books)
  const [likes, setLikes] = useState([]);
  const [bookSearch, setBookSearch] = useState([]) // Ady added book search state
  console.log("bookSearch: ", bookSearch)
  const [displaySearch, setDisplaySearch] = useState(false)
  const [displayPostForm, setDisplayPostForm] = useState(false)

  useEffect(() => {
    fetch("/books")
      .then((r) => r.json())
      .then( 
        (data)=>{                                 // Ady modified useEffect to setBookSearch
          setBooks(data)
          setBookSearch(data)
        }
        ); 
  }, []);

  useEffect(() => {
    fetch("/user_books")
      .then((r) => r.json())
      .then(setLikes);
  }, []);

  function onDeleteLike(id) {
    fetch(`/user_books/${id}`, {
      method: "DELETE",
    });
    const filteredLikes = likes.filter((book) => book.id !== id);
    setLikes(filteredLikes);
  }

  function display(){
    setDisplaySearch(!displaySearch)
  }

  function displayPost(){
    setDisplayPostForm(!displayPostForm)
  }


  // Ady added filter function to searchbar
  function searchAllBooks(textInSearchBar){
    console.log("textInSearchBar: ", textInSearchBar)
    let filterResult=books.filter(
      (eachBook)=>{
        return(
          eachBook.title.includes(textInSearchBar.toUpperCase())
        )
      }
    )
   setBookSearch([...filterResult])
  }
  // Ady added filter function to searchbar

  function handleAddBooks(newBook) {
    const newBooksArray = [newBook, ...books];
    setBooks(newBooksArray)
  }


  return (
    <div className="loggedinBase">
      <NavBar currentUser={currentUser} displayPost={displayPost} display={display} />
      Welcome {currentUser.username}!
      <p>
        <button className="logoutButton" onClick={handleLogout}>Logout</button>
      </p>


      {/* Ady added searchbar component */}
      <SearchBar
        invDataFlow={searchAllBooks} 
        display={display}
        displaySearch={displaySearch}
      />
      {/* Ady added searchbar component */}


      <BookForm
        addBooks={handleAddBooks} 
        displayPostForm={displayPostForm}
        displayPost={displayPost}
      />

      <Books
        // Ady modified books component to passdown bookSearch as prop
        // booksAll={books}
        books={bookSearch} 
        setLikes={setLikes}
        likes={likes}
        currentUser={currentUser}
        setBooks={setBooks}
        setBookSearch={setBookSearch}
      />
      <Likes likes={likes} setLikes={setLikes} onDeleteLike={onDeleteLike} />
    </div>
  );
}

export default LoggedInApp;
