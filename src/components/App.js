import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackCard } from './FeedbackOptions/FeedbackOptions';
import { StatisticsList } from './Statistics/Statistics';
import { Section } from 'Section/Section';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onAddGood = event => {
    this.setState({ [event]: this.state[event] + 1 });
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good }) =>
    Math.round((good / this.countTotalFeedback(this.state)) * 100);

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackCard
            onAdd={this.onAddGood}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics:">
          <StatisticsList
            feedbacks={this.state}
            total={this.countTotalFeedback(this.state)}
            positivePercentages={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </Section>
      </Layout>
    );
  }
}
