import React, { useState, useEffect } from "react";
import Books from "./Books";
import Likes from "./Likes";
import SearchBar from "./SearchBar";

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

  return (
    <div>
      Welcome {currentUser.username}!
      <p>
        <button onClick={handleLogout}>Logout</button>
      </p>

      {/* Ady added searchbar component */}
      <SearchBar
        invDataFlow={searchAllBooks} 
      />
      {/* Ady added searchbar component */}

      <Books
        // Ady modified books component to passdown bookSearch as prop
        books={bookSearch} 
        setLikes={setLikes}
        likes={likes}
        currentUser={currentUser}
      />
      <Likes likes={likes} setLikes={setLikes} onDeleteLike={onDeleteLike} />
    </div>
  );
}

export default LoggedInApp;
