import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./BookCard.module.css";

const BookCard = ({
  book,
  onAddToReadingList,
  onRemoveFromReadingList,
  isInReadingList,
}) => {
  const handleAddToReadingList = () => {
    onAddToReadingList(book);
  };

  const handleRemoveFromReadingList = () => {
    onRemoveFromReadingList(book);
  };

  return (
    <Card
      className={`${styles.card} ${
        isInReadingList ? styles.readingListCard : styles.smallCard
      }`}
    >
      <img
        src={book.coverPhotoURL}
        alt={`${book.title} Cover`}
        className={`${
          isInReadingList ? styles.imageLarge : styles.imageSmall
        } ${isInReadingList ? styles.imagePaddingTop : ""}`}
      />
      <div
        className={`${styles.content} ${
          isInReadingList ? styles.verticalContent : ""
        }`}
      >
        <CardContent
          className={`${isInReadingList ? styles.centerText : ""} ${
            !isInReadingList ? styles.smallText : ""
          }`}
        >
          <Typography
            variant="h5"
            component="div"
            className={!isInReadingList ? styles.smallTextTitle : ""}
          >
            {book.title}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            className={!isInReadingList ? styles.smallText : ""}
          >
            by {book.author}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={!isInReadingList ? styles.smallText : ""}
          >
            Reading Level: {book.readingLevel}
          </Typography>
        </CardContent>
        {isInReadingList ? (
          <Button
            variant="contained"
            color="error"
            onClick={handleRemoveFromReadingList}
            className={`${styles.button} ${
              isInReadingList ? styles.readingListButton : ""
            }`}
          >
            Remove from Reading List
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleAddToReadingList}
            className={`${styles.button} ${
              isInReadingList ? styles.readingListButton : ""
            }`}
          >
            Add to Reading List
          </Button>
        )}
      </div>
    </Card>
  );
};

export default BookCard;
