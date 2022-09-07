
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import FormOutput from "./FormOutput";

export default function NewApp() {
    const values = [
       
      ];
    
   
function NameForm (event){
    event.preventDefault()
    //console.log(event.target[0].value)
   // console.log(event.target.elements.email.value)
   // console.log(event.target.email.value)
   // console.log(this.inputNode.value)
    //console.log(event.target.elements.name.value)
    console.log(event.target.email.value)
    let emailData=event.target.email.value
    let nameData=event.target.name.value
    let reviewData=event.target.review.value
    values.push({id:1, name: nameData, email: emailData, review: reviewData,})
    console.log(values)
    }
    return (
    <div>
            <Form onSubmit={NameForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Review</Form.Label>
        <Form.Control name="review" type="textarea" rows={5} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <FormOutput />
    
    </div>
    )      
  };


  