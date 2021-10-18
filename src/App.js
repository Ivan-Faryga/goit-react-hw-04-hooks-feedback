import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import "./App.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (e) => {
    switch (e.target.name) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedbackAmount = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!good) {
      return 0;
    }
    return Math.round((good / countTotalFeedbackAmount()) * 100);
  };

  return (
    <div className="wrapper">
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={handleClick}
      />
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedbackAmount()}
          percentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
