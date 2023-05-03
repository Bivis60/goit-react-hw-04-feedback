import PropTypes from 'prop-types';
import {
  Item,
  SpanGood,
  SpanNeutral,
  SpanBad,
  Total,
  PositivePercentages,
  Notification,
} from './Statistics.styled';
export const StatisticsList = ({
  feedbacks,
  total = 0,
  positivePercentages = 0,
}) => {
  const { good, neutral, bad } = feedbacks;
  return total ? (
    <div>
      <ul>
        <Item>
          Good: <SpanGood>{good}</SpanGood>
        </Item>
        <Item>
          Neutral: <SpanNeutral>{neutral}</SpanNeutral>
        </Item>
        <Item>
          Bad: <SpanBad>{bad}</SpanBad>
        </Item>
      </ul>
      <Total>Total: {total}</Total>
      <PositivePercentages>
        Positive feedback: {positivePercentages}%
      </PositivePercentages>
    </div>
  ) : (
    <Notification>No feedback given</Notification>
  );
};

StatisticsList.propTypes = {
  positivePercentages: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
