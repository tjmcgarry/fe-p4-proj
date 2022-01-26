import LikeCard from "./LikeCard";

function Likes({ likes, onDeleteLike, setLikes }) {

  // function filterLikes(books){
  //   let filterLikes = books.map(
  //     (book)=>{
  //       if(books.id === book.id){
  //         return false
  //       }else {
  //         return true
  //       }
  //       } )
  //       setLikes(filterLikes)
  function sortByTitle(){
    return [...likes].sort(function(a, b){
      var nameA = a.book.title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.book.title.toUpperCase(); // ignore upper and lowercase
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
    console.log(likes)
    let sortedBooks = sortByTitle()

     setLikes(sortedBooks)
   }

   function sortAuthor(){
     let sortedBooks = sortByAuthor()
     setLikes(sortedBooks)
   }

  function sortByAuthor(){
  return [...likes].sort(function(a, b){
    var nameA = a.book.author.toUpperCase(); // ignore upper and lowercase
    var nameB = b.book.author.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
}

  return (
    <div>
      <h3 className="likedBooksH3">Liked Books</h3>
      <button onClick={sortBooks} className="sortButton">Sort by Title</button>
      <button onClick={sortAuthor} className="sortButton">Sort by Author</button>
      <div className="bookDiv">
        {likes.map((book) => {
          return (
            <div key={book.id}>
              <LikeCard
                book={book}
                setLikes={setLikes}
                onDeleteLike={onDeleteLike}
                // filterLikes={filterLikes}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Likes;
