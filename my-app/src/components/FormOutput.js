import React from "react";
import NewApp from "./ReviewForm";

/*function FormOut (){
    return [NewApp]
}
    const renderForm =FormOut();
    console.log(FormOut);
    console.log(NewApp)*/

class FormOut extends React.Component{
    constructor(props){
        super(props);
        this.state={
            NewApp: this.props.NewApp,
            FormOutput: this.props.FormOutputput,
            myId: this.props.id,
            myFormOutputFunction: this.props.myFormOutputFunction
        };
    }
    render(){
        return(
            <div>
                <h1>{this.state.NewApp}</h1>
                <h2>{this.state.FormOutput}</h2>
                <p>{this.state.myId}</p>
                <button id="submit"
                onClick={() =>{
                    this.state.myFormOutputFunction({
                        FormOut: this.state.FormOutput,
                        FormOutID: this.state.myId,
                    });
                   
                }}
                >
                Add Another Review
                </button>
            </div>
        );
    }
}

export default FormOut;