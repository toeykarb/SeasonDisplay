import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    state = { lat: null, erroeMessage:''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ erroeMessage: err.message})
            
        );
    }
 
        renderContent(){ 
            if(this.state.erroeMessage && !this.state.lat){
            return  <div>Erro: {this.state.erroeMessage}</div>
        }
        if(!this.state.erroeMessage && this.state.lat){
            return <SeasonDisplay  lat = {this.state.lat} />
        }
        return <Spinner message="Please accept location request"/> ;
        }
    
        

    render() {
        return (
        <div className="border red">
            {this.renderContent()}
        </div>
        )}; 
    }

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
