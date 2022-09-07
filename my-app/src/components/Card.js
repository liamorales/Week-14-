import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import StarRating from './StarRating';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import NewApp from './ReviewForm';



export default function MovieCard() {
    const movies = [
    {id: 1, name: 'Fear Street', genre: 'Horror'},
    {id: 2, name: 'Friday the 13th', genre: 'Horror'},
    {id: 3, name: 'Halloween', genre: 'Horror'},
    {id: 4, name: 'IT', genre: 'Horror'},
    {id: 5, name: 'Jeepers Creepers', genre: 'Horror'},
    {id: 6, name: 'Nightmare on Elm Street', genre: 'Horror'},
    ];
    return (
        <><div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm="6">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BNzQzYjIyZDQtMjBhZS00MzU3LTk0MTQtNTVmMDI3ZWY0ZWU3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" />
                            <Card.Body>
                                <Card.Title>Fear Street</Card.Title>
                                    <Card.Text>
                                        Fear Street tells a story of a circle of teenage friends who accidnently encounter the ancient evil, who is responsible for a series of brutal murders. 
                                    </Card.Text>
                            </Card.Body>
                            <NewApp />
                            <StarRating />
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg" />
                            <Card.Body>
                                <Card.Title>Friday The 13th</Card.Title>
                                    <Card.Text>
                                        Friday the 13th relates the story of a serial killer named Jason who is out for revenge.
                                    </Card.Text>
                            </Card.Body>
                            <StarRating />
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm="6">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSY2iHyDk4CRvqN4eLvAp9dJmloSzAqbU_Pg0f4DeLE3d7SMhBq" />
                            <Card.Body>
                                <Card.Title>Halloween</Card.Title>
                                    <Card.Text>
                                        Years after murdering his sister on Halloween, Micheal Myers escapes the mental hospital he's been living in since and returns to kill again. 
                                    </Card.Text>
                            </Card.Body>
                            <StarRating />
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BYjg1YTRkNzQtODgyYi00MTQ5LThiMDYtNDJjMWRjNTdjZDZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" />
                            <Card.Body>
                                <Card.Title>It</Card.Title>
                                    <Card.Text>
                                        Children in the town of Derry ban together to destroy a shape-shifting monster, which disguises itself as a clown and preys on their fears. 
                                    </Card.Text>
                            </Card.Body>
                            <StarRating />
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm="6">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMTkwNDU0NTE0OV5BMl5BanBnXkFtZTgwNzAzNzQyMTI@._V1_.jpg" />
                            <Card.Body>
                                <Card.Title>Jeepers Creepers</Card.Title>
                                    <Card.Text>
                                        Two siblings driving through the countryside for spring break encounter a monster that feeds on humans.
                                    </Card.Text>
                            </Card.Body>
                            <StarRating/>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://flxt.tmsimg.com/assets/p8572_p_v8_ad.jpg" />
                            <Card.Body>
                                <Card.Title>Nightmare on Elm Street</Card.Title>
                                    <Card.Text>
                                        Nancy Thompson uncovers her parents truth after she and her friends become targets of the spirit of a serial killer. 
                                    </Card.Text>
                            </Card.Body>
                            <StarRating />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div></>
    );
}


  
