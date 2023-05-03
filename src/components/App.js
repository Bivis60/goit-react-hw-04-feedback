import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackCard } from './FeedbackOptions/FeedbackOptions';
import { StatisticsList } from './Statistics/Statistics';
import { Section } from 'Section/Section';
import { Layout } from './Layout/Layout';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { good, neutral, bad };

  const onAddFeedback = event => {
    switch (event) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100 || 0);
  };

  return (
    <Layout>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackCard onAdd={onAddFeedback} options={Object.keys(feedbacks)} />
      </Section>
      <Section title="Statistics:">
        <StatisticsList
          feedbacks={feedbacks}
          total={countTotalFeedback()}
          positivePercentages={countPositiveFeedbackPercentage(feedbacks)}
        />
      </Section>
    </Layout>
  );
};
