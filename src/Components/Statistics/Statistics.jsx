import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }
  return (
    <div className="statistics__list">
      <p className="stat__text">Good: {good}</p>
      <p className="stat__text">Neutral: {neutral}</p>
      <p className="stat__text">Bad: {bad}</p>
      <hr />
      <p className="stat__total">Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};
export default Statistics;
