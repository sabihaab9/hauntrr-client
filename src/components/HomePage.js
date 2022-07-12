
import HouseCollection from "./HouseCollection";
import Search from "./Search";
import { Container } from "semantic-ui-react";
// import Ghost from "./Ghost";
// import House from "./Home";


function HomePage() {
  
    const [searchValues, setSearchValues] = useState({name: "", isHaunted: null, distance: null});
    //want state to be an obj, not string 

    //need to edit which houses we should display 
    const housesToDisplay = houses.filter((house) =>
        house.name.toLowerCase().includes(searchValues.toLowerCase())
    );



  
    return (
      <Container>
        <h1>Searcher </h1>
        <br />
        <Search searchValues={searchValues} onChangeSearch={setSearchValues} />
        <br />
        <HouseCollection houses={housesToDisplay}/>
        <br />
      </Container>
    );
  }
  
  export default HomePage;