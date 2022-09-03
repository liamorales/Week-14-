import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function NewApp() {
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const handleOnChange = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    setInputValues({ ...inputValues, ...abc });
  };

  return (
    <div className="NewApp">
      <button id="submit" type="submit" onClick={handleClick}>Submit Review</button>

      {Object.keys(inputValues).map((c) => {
        return <p>{inputValues[c]}</p>;
      })}

      {Array.from(Array(counter)).map((c, index) => {
        return (
          <><Form id="form1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" 
              onChange={handleOnChange}
              key={c}
              className={index}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com"
              onChange={handleOnChange}
              key={c}
              className={index} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control type="text" placeholder="Movie Name" 
                onChange={handleOnChange}
                key={c}
                className={index}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Type Review Here</Form.Label>
              <Form.Control as="textarea" rows={5} 
                onChange={handleOnChange}
                key={c}
                className={index}/>
            </Form.Group>
          </Form></>
          );}
        )
      }
    </div>
  );
}
        
    
   
  

            