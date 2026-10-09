import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text: ''
    };
  }

  handleChangeText(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { tasks, text } = this.state;

    const newTask = {
      id: uniqueId(),
      text: text
    };

    this.setState({
      tasks: [newTask, ...tasks],
      text: ''
    });
  }

  handleRemoveTask(idToRemove) {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter((item) => item.id !== idToRemove)
    });
  }

  render() {
    const { tasks, text } = this.state;

    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="me-3">
              <input
                type="text"
                value={text}
                required
                className="form-control"
                placeholder="I am going..."
                onChange={(e) => this.handleChangeText(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>

        {tasks.map((item) => (
          <Item 
            key={item.id} 
            task={item.text} 
            onRemove={() => this.handleRemoveTask(item.id)} 
          />
        ))}
      </div>
    );
  }
}



// END
