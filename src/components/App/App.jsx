import { useState } from 'react';

import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Wrap } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = totalFeedback => {
    if (!good) {
      return 0;
    }

    return Math.round((100 / totalFeedback) * good);
  };

  const stateKeys = ['good', 'neutral', 'bad'];
  const totalFeedback = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage(totalFeedback);

  return (
    <Wrap>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={stateKeys}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={percentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrap>
  );
}
