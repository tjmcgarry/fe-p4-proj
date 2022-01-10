import LikeCard from "./LikeCard";

function Likes({ likes, onDeleteLike, setLikes }) {
  return (
    <div>
      <h3>Liked Books</h3>
      <div>
        {likes.map((book) => {
          return (
            <div key={book.id}>
              <LikeCard
                book={book}
                setLikes={setLikes}
                onDeleteLike={onDeleteLike}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Likes;
