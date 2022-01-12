import React, { Component, useState } from "react";
import {AiOutlineCheckCircle} from 'react-icons/ai';

export default class ToDoIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoList: [],
            task: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeTask = this.removeTask.bind(this);
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

    removeTask(task) {
        this.setState({
            toDoList: this.state.toDoList.filter(item => item !== task)
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
                <Tasks toDoList={this.state.toDoList} removeTask={this.removeTask}/>
            </div>
        )
    }
}

class Tasks extends Component {

    render() {
        return (
            <div>
                {this.props.toDoList.map((task, index) => {
                    return (
                        <div key={index} onClick={() => this.props.removeTask(task)}>
                            <h4><AiOutlineCheckCircle /> {task}</h4>
                        </div>
                    )
                    // return <SingleTask checkToDoList={this.props.toDoList} newTask={task} key={index} id={index} />
                })}
            </div>
        )
    }
}