import { useState, useEffect } from 'react';

import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Wrap } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

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

  useEffect(() => {
    let totalSum = good + neutral + bad;
    setTotal(totalSum);
    setPositivePercentage(Math.round((100 / totalSum) * good) || 0);
  }, [good, neutral, bad]);

  const stateKeys = ['good', 'neutral', 'bad'];

  return (
    <Wrap>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={stateKeys}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrap>
  );
}
