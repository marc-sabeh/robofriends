import React, {Component} from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super();
        this.state={
            haserror : 'false'
        }
    }

    componentDidCatch(error , info){
        this.setState({haserror: 'true'});
    }

    render(){
        if(this.state.haserror){
            return <h1>Opps there is an error here</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;