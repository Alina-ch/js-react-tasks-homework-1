import React from 'react';

// BEGIN (write your solution here)

export default class Item extends React.Component {
  render() {
    const { task, onClick } = this.props;
    const isFinished = task.state === 'finished';

    const link = (
      <a href="#" className="todo-task" onClick={onClick}>
        {task.text}
      </a>
    );

    return (
      <div className="row">
        <div className="col-1">{task.id}</div>
        <div className="col">
          {isFinished ? <s>{link}</s> : link}
        </div>
      </div>
    );
  }
}
// END
