import React, { Component } from "react";

export default class ToDoIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoList: [],
            task: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ task: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ 
            toDoList: [...this.state.toDoList, this.state.task],
            task:''
        })
    }

    render() {
        return (
            <div>
                <h1>ToDo Index</h1>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Task" onChange={e => this.handleChange(e)} />
                    <button type="submit">Create New Task</button>
                </form>
                <Tasks toDoList={this.state.toDoList} />
            </div>
        )
    }
}

class Tasks extends Component {
    render() {
        return (
            <div>
                {this.props.toDoList.map((task, index) => {
                    return <SingleTask newTask={task} key={index} />
                })}
            </div>
        )
    }
}

const SingleTask = (props) => {
    return (
        <>
        <h3>{props.newTask}</h3>
        <input type="checkbox" />
        </>
    )
}