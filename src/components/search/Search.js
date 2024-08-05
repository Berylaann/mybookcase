import "./Search.css";

function Search(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.findBooksProps(props.keywordProps);
      };

    return(
        <form onSubmit={((e) => handleSubmit(e))}>
            <input type="search" 
            value={props.keywordProps} 
            id="search" 
            required 
            onChange={(e) => props.setKeywordProps(e.target.value)} 
            />
            <button type="submit">Search Book</button>
        </form>
    );
}

export default Search;