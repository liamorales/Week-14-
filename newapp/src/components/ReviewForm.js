import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function NewApp() {
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);

  const handleClick = (e) => {
    console.log(e.target.email);
    setCounter(counter + 1);
    // console.log(counter);
  };

  const handleOnChange = (e) => {

    const abc = {};
    abc[e.target.className] = e.target.value;
    setInputValues({ ...inputValues, ...abc });
  };

  return (
    <div className="NewApp" key={counter}>
      <button id="submit" type="subimt" onClick={handleClick}>Submit Review</button>

      {Object.keys(inputValues).map((c) => {
        // console.log("This is C",c, "this is values",inputValues);
        return <p>{inputValues[c]}</p>;
      })}

      {Array.from(Array(counter)).map((c, index) => {
        console.log(c)
        return (
          <><form id="form1" key={counter}>
            <Form.Group className="mb-3" key="1" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" 
              onChange={handleOnChange}
              key={c}
              className={index}/>
            </Form.Group>
            <Form.Group className="mb-3" key="2" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="name@example.com"
              onChange={handleOnChange}
              key={c}
              className={index} />
            </Form.Group>
            <Form.Group className="mb-3" key="3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control type="text" placeholder="Movie Name" 
                onChange={handleOnChange}
                key={c}
                className={index}/>
            </Form.Group>
            <Form.Group className="mb-3" key="4" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Type Review Here</Form.Label>
              <Form.Control as="textarea" rows={5} 
                onChange={handleOnChange}
                key={c}
                className={index}/>
            </Form.Group>
            <button id="submit" type="button" onClick={handleClick}>Review</button>
          </form></>
          );}
        )
      }
    </div>
  );
}
        
    
   
  

            