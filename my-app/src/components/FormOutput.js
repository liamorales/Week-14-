import React from "react";
import NewApp from "./ReviewForm";

class FormOut extends React.Component{
    constructor(props){
        super(props);
        this.state={
            NewApp: this.props.NewApp,
            FormOutput: this.props.FormOutput,
            myId: this.props.id,
            myFormOutFunction: this.props.FormOut,
        };
    }
    render(){
        return(
            <div>
                <h1>This is passed from the {this.state.NewApp} component</h1>
                <h2>{this.state.FormOutput}</h2>
                <p>{this.state.myId}</p>
                <button id="submit"
                onClick={() =>{
                    this.state.myFormOutputFunction({
                        Form: this.state.FormOutput,
                        formID: this.state.myId,
                    });
                    function getInfo (){
                        return [NewApp]
                    }
                    const NewApp=getInfo
                    console.log(getInfo);
                }}
                >
                Add Another Review
                </button>
            </div>
        );
    }
}

export default FormOut;