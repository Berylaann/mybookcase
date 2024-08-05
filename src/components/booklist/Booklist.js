import Book from "../book/Book";

function Booklist(props) {
    console.log ("length" + props.booksList.length);
    
    // this shows when the books.json arrar is empty
      if(props.booksList.length === 0) {
        return <p>No books yet...</p>;
      }

    return (
    <div>
       {/* Without destructuring */}
      {/* {books.map((book) => (
        <Book
          key={book.id}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          price={book.price}
        />
      ))} */}

      {/* With destructing */}
      {props.booksList.map((book) => (
        <Book key={book.id} bookProps={book} />
      ))} 
    </div>
    );
}

export default Booklist;