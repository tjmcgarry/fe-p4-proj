import Button from "@material-ui/core/Button";

function BookCard({ book, setLikes, likes, onDelete, currentUser }) {
  function onLikeClick(id) {
    const newPost = {
      user_id: currentUser.id,
      book_id: book.id,
      rating: 10,
      // author: book.author,
      // title: book.title,
      // rating: book.rating
      // img_url: book.img_url,
    };

    let config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    };

    fetch("/user_books", config)
      .then((r) => r.json())
      .then((data) => setLikes([...likes, data]));
  }

  return (
    <div className="bookCard">
      <img src={book.img_url} alt="book"></img>
      <h3 className="bookTitle">{book.title}</h3>
      <h3>{book.author}</h3>
      <Button onClick={() => onLikeClick(book.id)}>Add to Likes</Button>
    </div>
  );
}
export default BookCard;
