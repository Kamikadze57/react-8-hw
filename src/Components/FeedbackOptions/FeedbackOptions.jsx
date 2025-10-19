const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="buttons__box">
    {options.map((option) => (
      <button key={option} className="btn" onClick={() => onLeaveFeedback(option)}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;