import React from 'react';

import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Wrap } from './App.styled';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateKeys = Object.keys(this.state);

  handleIncrement = event => {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = totalFeedback => {
    if (!this.state.good) {
      return 0;
    }
    this.percentage = Math.round((100 / totalFeedback) * this.state.good);
    return this.percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(totalFeedback);
    return (
      <Wrap>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.stateKeys}
            onLeaveFeedback={this.handleIncrement}
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
}
