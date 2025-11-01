import { Component } from "react";

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className="buttons__box">
        {options.map((option) => (
          <button key={option} className="btn" onClick={() => onLeaveFeedback(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;