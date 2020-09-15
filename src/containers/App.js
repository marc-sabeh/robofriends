import React, {Component} from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'


class App extends Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({'robots':users}))
    }

    onSearchChange =(event) =>{
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredrobots =this.state.robots.filter(
            robots=>{
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            }
        )
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>  //i the api call is long then we get a loading
        }
        else{
    return(
        <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchchange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                     <CardList robots={filteredrobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
        }
    }
}

export default App;