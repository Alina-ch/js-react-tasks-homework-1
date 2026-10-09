import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)

class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text: '',
    };
  }

  componentDidMount = async () => {
    const res = await axios.get(routes.tasksPath());
    this.setState({ tasks: res.data });
  };

  handleChangeText = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { text } = this.state;
    if (!text.trim()) return;

    const res = await axios.post(routes.tasksPath(), { text });
    this.setState((prevState) => update(prevState, {
      tasks: { $push: [res.data] },
      text: { $set: '' },
    }));
  };

  handleToggleTaskState = (task) => async (e) => {
    e.preventDefault();
    const isFinished = task.state === 'finished';
    const path = isFinished ? routes.activateTaskPath(task.id) : routes.finishTaskPath(task.id);

    const res = await axios.patch(path);
    const { tasks } = this.state;
    const index = tasks.findIndex((t) => t.id === task.id);

    this.setState(update(this.state, {
      tasks: { [index]: { $merge: { state: res.data.state } } },
    }));
  };

  render() {
    const { tasks, text } = this.state;

    const sortedTasks = [...tasks].sort((a, b) => b.id - a.id);

    const activeTasks = sortedTasks.filter((t) => t.state === 'active');
    const finishedTasks = sortedTasks.filter((t) => t.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
            <div className="d-flex col-md-3">
              <input
                type="text"
                value={text}
                required
                className="form-control me-3"
                placeholder="I am going..."
                onChange={this.handleChangeText}
              />
              <button type="submit" className="btn btn-primary">add</button>
            </div>
          </form>
        </div>

        {activeTasks.length > 0 && (
          <div className="todo-active-tasks">
            {activeTasks.map((task) => (
              <Item key={task.id} task={task} onClick={this.handleToggleTaskState(task)} />
            ))}
          </div>
        )}

        {finishedTasks.length > 0 && (
          <div className="todo-finished-tasks">
            {finishedTasks.map((task) => (
              <Item key={task.id} task={task} onClick={this.handleToggleTaskState(task)} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TodoBox;

// END
