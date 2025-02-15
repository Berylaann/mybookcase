import "./Book.css";

import PropTypes from "prop-types";

function Book(props) {
    // use object destructuring to extract the book object keys
    const {
        volumeInfo: { title, authors, description },
        price,
      } = props.bookProps;

      const addBook = (titleParameter) => {
        console.log(`The title of this book is : ${titleParameter}`);
      };

      const addSelectedBook = (titleParameter) => {
        console.log(`My sister the serial killer : ${titleParameter}`);
      }

      return (
      // without object destructuring
      // <div>
      //   <h2>Title: {props.title}</h2>
      //   <p>by {props.authors}</p>
      //   <p>{props.description}</p>
      //   <span>price: {props.price}</span>
      // </div>
      <div>
        <h2>Title: {title}</h2>
        <p>by {authors ? authors.join(",") : "No Authors Listed" }</p>
  <p>{description}</p>
        <span>price: {price ? `£${price}` : "No price listed" }</span>
        <button onClick={() => addBook(title)}>Add +</button>
      
      </div>
    );
  }
  
  // checks the value type of props in order to make sure the right data
  // is being sent to the props

  Book.propTypes = {
    bookProps: PropTypes.shape({
      volumeInfo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        description: PropTypes.string,
      }),
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

// default props: shows the text "No description provided" when the description
// value is not provided.


Book.defaultProps = {
  bookProps: {
    volumeInfo: {
      description: "No description provided",
    },
  },
};
    
 
export default Book;