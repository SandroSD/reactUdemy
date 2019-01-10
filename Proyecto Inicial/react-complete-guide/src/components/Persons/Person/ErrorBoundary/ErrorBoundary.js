import React, {Component} from 'react';

class ErrorBoundary extends Component{
    state = {
        hasError = false,
        errorMsg = ""
    }
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render(){
        if(this.state.hasError){
            return <h1>Tenemos un error</h1>;
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;