import React, { useState } from "react";

function BookForm({addBooks, displayPost, displayPostForm}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [img_url, setImg_Url] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      title,
      author,
      img_url,
    };

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newBook) => {
        addBooks(newBook);
      });
  }

  return (

    <section>
      <button onClick={displayPost} className="addBookButton">Add A Book </button>
      {displayPostForm ?  
      <form className="submitForm" onSubmit={handleSubmit}  autoComplete="off">
        <h3>Add A New Book</h3>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {title.length === 0 ? (
          <p style={{ color: "red" }}>You must provide a title.</p>
        ) : <p style={{ color: "white" }}>You must provide a title.</p>}

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        {author.length === 0 ? (
          <p style={{ color: "red" }}>You must provide an author.</p>
        ) : <p style={{color: "white" }}>You must provide an author.</p>}

        <label htmlFor="img_url">Image URL</label>
        <input
          type="text"
          id="img_url"
          name="img_url"
          value={img_url}
          onChange={(event) => setImg_Url(event.target.value)}
        />
        {img_url.length === 0 ? (
          <p style={{ color: "red" }}>You must provide a title</p>
        ) : <p style={{ color: "white" }}>You must provide a title</p>}

        <button className="addBookButton" type="submit">Add Book</button>
      </form>
: <div></div>}
    </section>

  
  );
}

export default BookForm;