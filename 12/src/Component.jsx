import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
export default class Logger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: []
    };
  }

  handleAction = (step) => {
    const { log } = this.state;
    const latestValue = get(log, '[0].value', 0);
    const newValue = latestValue + step;

    const newItem = {
      id: uniqueId(),
      value: newValue
    };

    this.setState({
      log: [newItem, ...log]
    });
  };

  handleDelete = (idToRemove) => {
    const { log } = this.state;
    this.setState({
      log: log.filter((item) => item.id !== idToRemove)
    });
  };

  render() {
    const { log } = this.state;

    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button 
            type="button" 
            className="btn btn-outline-success" 
            onClick={() => this.handleAction(1)}
          >
            +
          </button>
          <button 
            type="button" 
            className="btn btn-outline-danger" 
            onClick={() => this.handleAction(-1)}
          >
            -
          </button>
        </div>

        {log.length > 0 && (
          <div className="list-group">
            {log.map((item) => (
              <button
                key={item.id}
                type="button"
                className="list-group-item list-group-item-action"
                onClick={() => this.handleDelete(item.id)}
              >
                {item.value}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
// END
