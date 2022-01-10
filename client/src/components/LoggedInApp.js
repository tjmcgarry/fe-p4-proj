import React, { useState, useEffect } from "react";
import Books from "./Books";
import Likes from "./Likes";
function LoggedInApp({ setCurrentUser, currentUser }) {
  const handleLogout = () => {
    setCurrentUser(null);
    fetch("/logout", { method: "DELETE" });
  };

  const [books, setBooks] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    fetch("/books")
      .then((r) => r.json())
      .then(setBooks);
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

  return (
    <div>
      Welcome {currentUser.username}!
      <p>
        <button onClick={handleLogout}>Logout</button>
      </p>
      <Books
        books={books}
        setLikes={setLikes}
        likes={likes}
        currentUser={currentUser}
      />
      <Likes likes={likes} setLikes={setLikes} onDeleteLike={onDeleteLike} />
    </div>
  );
}

export default LoggedInApp;
