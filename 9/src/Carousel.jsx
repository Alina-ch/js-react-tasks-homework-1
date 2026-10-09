import React from 'react';
import cn from 'classnames';

// BEGIN
export default class Carousel extends React.Component {
  state = {
    activeIndex: 0,
  };

  handleNext = () => {
    const { images } = this.props;
    const { activeIndex } = this.state;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  handlePrev = () => {
    const { images } = this.props;
    const { activeIndex } = this.state;
    const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    this.setState({ activeIndex: prevIndex });
  };

  render() {
    const { images } = this.props;
    const { activeIndex } = this.state;

    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((src, index) => (
            <div key={`${src}-${index}`} className={cn('carousel-item', index === activeIndex ? "active" : "")}>
              <img alt="" className="d-block w-100" src={src} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev" onClick={this.handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" onClick={this.handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
// END
