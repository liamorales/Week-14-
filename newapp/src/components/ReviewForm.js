

import React from "react";

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfMovies: 6,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
        <><div class="mb-3">
            <label for="exampleFormControlInput1" 
            class="form-label">Movie Name</label>
            <input type="movieName" class="form-control" 
            id="exampleFormControlInput1" name="reviewMovie"
            checked={this.state.reviewMovie} onChange={this.handleInputChange}
            placeholder="type movie title here">
            </input>.
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" 
                class="form-label">Type Review Here</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea> 
                <input name="writtenReview" type="text" 
                checked={this.state.writtenReview} onChange={this.handleInputChange} />
         
            </div></>
    );
  }
}
/*  <label>
                Move List:
                <input 
                name="letsWatch"
                type="Romance"
                checked={this.state.letsWatch}
                onChange={this.handleInputChange}/>
            </label>
            <br/>
            <label>
                Rating:
                <input
                name="numberOfStars"
                type="number"
                value={this.state.numberOfStars}
                onChange={this.handleInputChange} />
            </label> */
