import BookCard from "./BookCard";

function Books({ books, setLikes, likes, onDelete }) {
  return (
    <div>
      <h3>Books to Like </h3>
      <div>
        {books.map((book) => {
          return (
            <BookCard
              book={book}
              setLikes={setLikes}
              likes={likes}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Books;
