import React from 'react';

const Title = ({ children }) => <h4 className="card-title">{children}</h4>;
const Text = ({ children }) => <p className="card-text">{children}</p>;
const Body = ({ children }) => <div className="card-body">{children}</div>;

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

Card.Body = Body;
Card.Title = Title;
Card.Text = Text;

export default Card;
