import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class Modal extends React.Component {
  static Header = class extends React.Component {
    render() {
      const { toggle, children } = this.props;
      return (
        <div className="modal-header">
          <div className="modal-title">{children}</div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggle}
          ></button>
        </div>
      );
    }
  };

  static Body = class extends React.Component {
    render() {
      const { children } = this.props;
      return <div className="modal-body">{children}</div>;
    }
  };

  static Footer = class extends React.Component {
    render() {
      const { children } = this.props;
      return <div className="modal-footer">{children}</div>;
    }
  };

  render() {
    const { isOpen, children } = this.props;

    const modalClass = cn('modal', {
      'fade show': isOpen,
    });

    const modalStyle = {
      display: isOpen ? 'block' : 'none',
    };

    return (
      <div className={modalClass} style={modalStyle} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
// END
