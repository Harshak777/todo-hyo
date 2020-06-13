import React, { Component } from "react";
import axios from "axios";
import "./AddTodo.css";


const API_URL = "http://localhost:3001/todos/";

class Input extends Component {
  state = {
    task: "",
    completed: "false",
  };

  addTodo = () => {
    const todo = { task: this.state.task };
    if (todo.task && todo.task.length > 0) {
      axios
        .post(API_URL, todo)
        .then((res) => {
          if (res.data) {
            this.props.getTodos();
            this.setState({ task: "" });
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please enter a task first!");
    }
  };
  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  render() {
    let { task } = this.state;
    return (
      <div className="container row" style={{marginTop: 10}}>
      <div className="col-md-2" />

      <div className="col-md-8">
        <input
          type="text"
          className="form-control "
          placeholder="Add a Todo"
          onChange={this.handleChange}
          value={task}
        />
        <br />
        <button
          type="button"
          onClick={this.addTodo}
          style={{marginLeft: 300 }}
          className="btn btn-warning mb-2"
        >
          Add
        </button>
        <br />
        <br />
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}

export default Input;
