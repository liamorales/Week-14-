import React from "react";

class NewApp2 extends React.Component {
   reviewData=[]
    handleSubmit = (event) => {
      event.preventDefault()
      console.log(event.target[0].value)
      console.log(event.target.elements.username.value)
      console.log(event.target.username.value)
      console.log(this.inputNode.value)
      this.reviewData.push({username: event.target.username.value})
      console.log("this is reviewdata",this.reviewData);
      console.log(this.reviewData[0].username, "this shows the exact username value");
    }


    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="username"
              ref={node => (this.inputNode = node)}
            />
          </label>
          <button type="submit">Submit</button>
            </form>
            <div>
                {this.reviewData.map(formvalues =>{
                    console.log("test");
                    return(
                    <div> 
                        {formvalues}
                    </div>
                    )
                })}
            </div>
        </div>
      )
    }
  }
  export default NewApp2
  

  