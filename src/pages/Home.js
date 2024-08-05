import Booklist from "../components/booklist/Booklist";
import Search from "../components/search/Search";

function Home(props) {
    return(
    <>
      <Search 
      keywordProps={props.keyProps}
      setKeywordProps={props.setKeyProps}
      findBooksProps={props.searchBooksProps}
      />
      <Booklist booksList={props.bProps} />
     </>
    
   );
}

export default Home;