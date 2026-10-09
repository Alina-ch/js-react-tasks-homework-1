import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpened: props.opened};
  }

  toggleCollapse = () => {
    const { isOpened } = this.state;
    this.setState({ isOpened: !isOpened });
  };

  render() {
    const { text } = this.props;
    const { isOpened } = this.state;

    return (
      <div>
        <p>
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded={isOpened}
            onClick={this.toggleCollapse}
          >
            Link with href
          </a>
        </p>
        <div className={cn('collapse', { show: isOpened })}>
          <div className="card card-body">{text}</div>
        </div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  opened: true,
};
//END