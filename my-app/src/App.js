
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import StarRating from './components/StarRating';
import MovieCard from './components/Card';
import NewApp from './components/ReviewForm';
import "bootstrap/dist/css/bootstrap.min.css";


function AppStructure() {
  return(
    <><Container>
      <div>
        <Row>
          <Col>
            
            <div></div>
            <MovieCard />
          </Col>
        </Row>
      </div>
    </Container></>
    
  );
}

const App=()=> {
  return (
    <div clasName="App">
      <StarRating />
    </div>
  );
};

export default AppStructure;
