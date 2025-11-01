import { Component } from "react";
import "./App.css";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback = (type) => {
    this.setState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = (total) => {
    const { good } = this.state;
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    const options = Object.keys(this.state);
    return (
      <div className="app">
        <Section title="Please leave a feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.leaveFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        </Section>
      </div>
    );
  }
}

export default App;
