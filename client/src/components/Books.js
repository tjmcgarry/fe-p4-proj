import BookCard from "./BookCard";

function Books({ books, setBooks, setBookSearch, setLikes, likes, onDelete, currentUser }) {
  


  

  function sortByTitle(){
    return [...books].sort(function(a, b){
      var nameA = a.title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
  }

  function sortByAuthor(){

  return [...books].sort(function(a, b){
    var nameA = a.author.toUpperCase(); // ignore upper and lowercase
    var nameB = b.author.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
}

  function sortBooks(){
    let sortedBooks = sortByTitle()
    setBookSearch(sortedBooks)
   }

   function sortAuthor(){
     let sortedBooks = sortByAuthor()
     setBookSearch(sortedBooks)
   }



  return (
    <div>
      <h3 className="booksToLikeH3">Books to Like </h3>
      <div className="sortButtons">
      <button onClick={sortBooks} className="sortButton">Sort by Title</button>
      <button onClick={sortAuthor} className="sortButton">Sort by Author</button>
      </div>
      <div className="bookDiv">
        {books.map((book) => {
          return (
            <BookCard
              book={book}
              setLikes={setLikes}
              likes={likes}
              onDelete={onDelete}
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Books;
