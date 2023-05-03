import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export const FeedbackCard = ({ onAdd, options }) => {
  return (
    <List>
      {options.map(option => (
        <li key={option}>
          <Button type="button" onClick={() => onAdd(option)}>
            {option}
          </Button>
        </li>
      ))}
    </List>
  );
};

FeedbackCard.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onAdd: PropTypes.func.isRequired,
};
