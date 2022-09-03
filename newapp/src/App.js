import ReviewForm from './components/ReviewForm';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRating from './components/StarRating';
import MovieCard from './components/Movie container/card';




function AppStructure() {
  return(
    <><Container>
      <div>
        <Row>
          <Col>
            <ReviewForm />
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
