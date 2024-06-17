import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "./Queries";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";
import styles from "./BookList.module.css";

const BookList = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [readingList, setReadingList] = useState([]);

  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleAddToReadingList = (book) => {
    const isBookInReadingList = readingList.some(
      (item) => item.title === book.title && item.author === book.author
    );
    if (!isBookInReadingList) {
      setReadingList([...readingList, book]);
    }
  };

  const handleRemoveFromReadingList = (book) => {
    setReadingList(
      readingList.filter(
        (item) => item.title !== book.title || item.author !== book.author
      )
    );
  };

  const handleSearch = (term) => {
    if (term.trim() === "") {
      setSearchResults([]);
    } else {
      setSearchResults(
        data.books.filter((book) =>
          book.title.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div
        className={styles.searchResults}
        style={{
          overflowY: searchResults.length > 0 ? "scroll" : "hidden",
        }}
      >
        {searchResults.length > 0 ? (
          <ul className={`${styles.list} ${styles.searchResultsList}`}>
            {searchResults.map((book) => (
              <li key={book.title + book.author}>
                <BookCard
                  book={book}
                  onAddToReadingList={handleAddToReadingList}
                  isInReadingList={false}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noResults}>No results found.</p>
        )}
      </div>

      <h2 className={styles.readingListTitle}>Reading List</h2>
      {readingList.length > 0 ? (
        <ul className={`${styles.list} ${styles.readingListGrid}`}>
          {readingList.map((book) => (
            <li key={book.title + book.author}>
              <BookCard
                book={book}
                onRemoveFromReadingList={handleRemoveFromReadingList}
                isInReadingList={true}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noResults}>Your reading list is empty.</p>
      )}
    </div>
  );
};

export default BookList;
