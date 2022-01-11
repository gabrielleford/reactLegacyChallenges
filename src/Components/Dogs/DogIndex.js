import React, { Component } from "react";

export default class DogIndex extends Component {
    constructor() {
        super();
        this.state = {
            dogImage: '',
            status: ''
        }
        this.fetchDog = this.fetchDog.bind(this);
    }

    fetchDog() {
        fetch(`https://dog.ceo/api/breeds/image/random`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({
                    dogImage: res.message,
                    status: res.status
                })
            })
            .catch(error => console.log(error))
        
    }

    render() {
        return (
            <div>
                <h1>Press the button to fetch a random image of a dog!</h1>
                <button onClick={this.fetchDog}>Fetch!</button>
                <br />
                <img src={this.state.dogImage} alt={this.state.status} />
            </div>
        )
    }
}